<# 
This script is applicable for TFS 2018 RTM and TFS 2018 Update1.
This is a guidance script to bring a deployment group agent online after TFS Hardware move activity. Post Hardware move, all the agents will be offline as the TFS server url has been updated. User can use\follow this script to bring them online. The script has to be run from Administrator PowerShell prompt on the each agent machine.

Inputs:
1. targetTFSUrl : New TFS url after hardware move.
2. patToken : PAT token from new TFS with Deployment group manage scope (at least)
3. agentDownloadUrl: this is optional, user can specify if she wants any specific agent version to be installed.
4. existingAgentFolder: The script will Auto-detect the agent folder if it was running as windows service. User need to pass the folder path otherwise.
5. action: By default, the script will not do any update operation, it will just print what changes will happen after the script is applied. User need to set action parameter to 'apply' to execute actual steps.

Output:
If action is set to apply, this script will
1. Delete the existing unusable, offline agent and re-configure a new agent in with same name and properties including tags.
2. All existing deployment history will be deleted. 

Example usage:
.\HardwareMoveRemoveOldAgent.ps1 -targetTFSUrl <newTfsUrl> -patToken <PAT-for-new-TFS>
.\HardwareMoveRemoveOldAgent.ps1 -targetTFSUrl <newTfsUrl> -patToken <PAT-for-new-TFS> -existingAgentFolder <AgentFoilder (C:\vstsagents\A1)>
.\HardwareMoveRemoveOldAgent.ps1 -targetTFSUrl <newTfsUrl> -patToken <PAT-for-new-TFS> -existingAgentFolder <AgentFoilder (C:\vstsagents\A1)> -action 'apply'
#>

param([string]$targetTFSUrl,
      [string]$patToken,
      [string]$existingAgentFolder = "",
      [string]$agentDownloadUrl = 'https://go.microsoft.com/fwlink/?linkid=867184',
      [string]$action = "PrintEffect")

$ErrorActionPreference="Stop"
$apiVersion = '4.0-preview.1'

# Basic input validations
If (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent() ).IsInRole( [Security.Principal.WindowsBuiltInRole] “Administrator”)){
    throw "Run command in an administrator PowerShell prompt"
};

If ($PSVersionTable.PSVersion -lt (New-Object System.Version("3.0"))){
    throw "The minimum version of Windows PowerShell that is required by the script (3.0) does not match the currently running version of Windows PowerShell."
}


# Auto detect existing agent folder
if ($existingAgentFolder -eq ""){
    $ServiceNamePrefix = 'vstsagent*'
    $agentServices = Get-Service -Name $ServiceNamePrefix
    if ($agentServices.Count -eq 1){
        $serviceName = $agentServices[0].Name;
        $service = get-wmiobject -query "select * from win32_service where name = `'$serviceName`'";
        $serviceExePath = $service.pathname;
        # $serviceExePath will have value like "C:\vstsAgent2\A8\bin\AgentService.exe"
        $existingAgentFolder = Split-Path (Split-Path $serviceExePath -Parent) -Parent;
    }
}

if ($existingAgentFolder -eq ""){
    throw "Not able to auto detect existing agent folder. Provide the existingAgentFolder as input parameter. Generally it is in C:\vstsagent folder.";
}

cd $existingAgentFolder;

if (-not (Test-Path '.\.agent')){
    throw "No agent installed in this path. Please run this script from Agent Home Directory. Generally it is in C:\vstsagent folder."
}


# Collect information about the existing agent
$sourceTFSUrl = "NoAbleToReadAgentFile"
$collectionName = "NoAbleToReadAgentFile"
$projectName = "NoAbleToReadAgentFile"
$deploymentGroupId = "NoAbleToReadAgentFile"
$deploymentGroupName = "NoAbleToReadAgentFile"
$agentName = "NoAbleToReadAgentFile"
$tags = "NoAbleToReadAgentFile"
$deploymentMachineId = "NoAbleToReadAgentFile"

$agentproperties = Get-Content .\.agent |ConvertFrom-Json
$sourceTFSUrl = $agentproperties.serverUrl;
$collectionName = $agentproperties.collectionName;
$projectName = $agentproperties.projectId;
$deploymentGroupId = $agentproperties.deploymentGroupId;
$agentName = $agentproperties.agentName;

if ($sourceTFSUrl.StartsWith($targetTFSUrl)){
    Write-Verbose -Verbose "Agent $agentName is already configured to the TFS $targetTFSUrl";
    return 0;
}

# Get the Deployment group name
$encodedPat = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes(":$patToken"))
$getDeploymentGroupUrl = $targetTFSUrl + '/' + $collectionName + '/' + $projectName + '/_apis/distributedtask/deploymentgroups/' + $deploymentGroupId + '?api-version=' + $apiVersion
 
$dg = Invoke-RestMethod -Uri $getDeploymentGroupUrl -Method Get -Headers @{Authorization = "Basic $encodedPat"} -ContentType "application/json"
$deploymentGroupName = $dg.name


# Get the Machine Tags
$getDeploymentMachineUrl = $targetTFSUrl + '/' + $collectionName + '/' + $projectName + '/_apis/distributedtask/deploymentgroups/' + $deploymentGroupId + '/machines?name=' + $agentName + '&api-version=' + $apiVersion

$dm = Invoke-RestMethod -Uri $getDeploymentMachineUrl -Method Get -Headers @{Authorization = "Basic $encodedPat"} -ContentType "application/json"
$tags = $dm.value[0].tags -join ",";
$deploymentMachineId = $dm.value[0].id;

if ($dm.value[0].agent.status -eq 'online'){
    Write-Verbose -Verbose "Agent $agentName is already configured to the TFS $targetTFSUrl"
    return 0;
}


# Create and go to new agent folder
$parentPath = Split-Path $existingAgentFolder -Parent
cd $parentPath
$newAgentFolfer = "";

for ($i=1; $i -lt 100; $i++){
    $destFolder="A"+$i.ToString();
    if (-NOT (Test-Path ($destFolder))){
        $newAgentFolfer = $destFolder;
        break;
    }
};

$newAgentPath = $parentPath + $newAgentFolfer;

if ($action -ne "apply"){
    Write-Verbose -Verbose "If action is set to apply, this script will delete the existing unusable, offline agent $agentName from the deployment group $deploymentGroupName in the TFS $targetTFSUrl and re-configure a new agent in $newAgentPath path with same name and properties including tags $tags. Deployment history associated with existing agent will be removed along with agent removal.";
    return 0;
}

Write-Verbose -Verbose "Start execution : It will delete the existing unusable, offline agent $agentName from the deployment group $deploymentGroupName in the TFS $targetTFSUrl and re-configure a new agent in $newAgentPath path with same name and properties including tags $tags. Deployment history associated with existing agent will be removed along with agent removal.";
mkdir $newAgentFolfer;
cd $newAgentFolfer; 

# download the agent bits.
$agentZip= $agentZip="$PWD\agent.zip";
$DefaultProxy=[System.Net.WebRequest]::DefaultWebProxy;$securityProtocol=@();
$securityProtocol+=[Net.ServicePointManager]::SecurityProtocol;
$securityProtocol+=[Net.SecurityProtocolType]::Tls12;[Net.ServicePointManager]::SecurityProtocol=$securityProtocol;
$WebClient=New-Object Net.WebClient;
    
if($DefaultProxy -and (-not $DefaultProxy.IsBypassed($agentDownloadUrl)))
{
    $WebClient.Proxy= New-Object Net.WebProxy($DefaultProxy.GetProxy($agentDownloadUrl).OriginalString, $True);
};

$WebClient.DownloadFile($agentDownloadUrl, $agentZip);

Add-Type -AssemblyName System.IO.Compression.FileSystem;[System.IO.Compression.ZipFile]::ExtractToDirectory( $agentZip, "$PWD"); 

# Delete existing agent reference from the target TFS	
$deleteDeploymentMachineUrl = $targetTFSUrl + '/' + $collectionName + '/' + $projectName + '/_apis/distributedtask/deploymentgroups/' + $deploymentGroupId + '/machines/' + $deploymentMachineId + '?api-version=' + $apiVersion
Invoke-RestMethod -Uri $deleteDeploymentMachineUrl -Method Delete -Headers @{Authorization = "Basic $encodedPat"} -ContentType "application/json"


# Re-configure the agent to the target TFS
if ($tags -ne ""){
    .\config.cmd --deploymentgroup --url $targetTFSUrl --collectionname $collectionName --projectname $projectName --deploymentgroupname $deploymentGroupName --agent $agentName --auth Integrated --runasservice --work '_work' --unattended --adddeploymentgrouptags --deploymentgrouptags $tags
}
else{
    .\config.cmd --deploymentgroup --url $targetTFSUrl --collectionname $collectionName --projectname $projectName --deploymentgroupname $deploymentGroupName --agent $agentName --auth Integrated --runasservice --work '_work' --unattended
}
