{
  Node callback: {
    prefix: "cb",
    body: "(err, ${1:value}) => {${0}}"
  },
  Promise: {
    prefix: "pr",
    body: "new Promise((resolve, reject) => {\n\t${0}\n})"
  },
  Promise.then: {
    prefix: "then",
    body: "${1:promise}.then((${2:value}) => {\n\t${0}\n})"
  },
  chain then: {
    prefix: ".then",
    body: ".then((${1:value}) => {${0}})"
  },
  Promise.catch: {
    prefix: "catch",
    body: "${1:promise}.catch((${2:err}) => {\n\t${0}\n})"
  },
  chain catch: {
    prefix: ".catch",
    body: ".catch((${1:err}) => {${0}})"
  },
  describe: {
    prefix: "desc",
    body: "describe('${1:description}', () => {\n\t${0}\n});"
  },
  context: {
    prefix: "cont",
    body: "context('${1:description}', () => {\n\t${0}\n});"
  },
  it: {
    prefix: "it",
    body: "it('${1:description}', () => {\n\t${0}\n});"
  },
  it synchronous: {
    prefix: "its",
    body: "it('${1:description}', () => {\n\t${0}\n});"
  },
  it asynchronous: {
    prefix: "ita",
    body: "it('${1:description}', (done) => {\n\t${0}\n\tdone();\n});"
  },
  mocha before: {
    prefix: "bf",
    body: "before(() => {\n\t${0}\n});"
  },
  mocha beforeEach: {
    prefix: "bfe",
    body: "beforeEach(() => {\n\t${0}\n});"
  },
  mocha after: {
    prefix: "aft",
    body: "after(() => {\n\t${0}\n});"
  },
  mocha afterEach: {
    prefix: "afe",
    body: "afterEach(() => {\n\t${0}\n});"
  },
  class: {
    prefix: "cl",
    body: "class ${1:name} {\n\tconstructor(${2:arguments}) {\n\t\t${0}\n\t}\n}"
  },
  class extends: {
    prefix: "cex",
    body: "class ${1:name} extends ${2:base} {\n\tconstructor(${3:arguments}) {\n\t\tsuper(${3:arguments});\n\t\t${0}\n\t}\n}"
  },
  constructor: {
    prefix: "ctor",
    body: "constructor(${1:arguments}) {\n\tsuper(${1:arguments});${0}\n}"
  },
  console.log: {
    prefix: "clog",
    body: "console.log(${0})"
  },
  console.error: {
    prefix: "cerr",
    body: "console.error(${0})"
  },
  if statement: {
    prefix: "if",
    body: "if (${1:condition}) {\n\t${0}\n}"
  },
  else statement: {
    prefix: "el",
    body: "else {\n\t${0}\n}"
  },
  if/else statement: {
    prefix: "ife",
    body: "if (${1:condition}) {\n\t${0}\n} else {\n\t\n}"
  },
  else if statement: {
    prefix: "ei",
    body: "else if (${1:condition}) {\n\t${0}\n}"
  },
  for loop: {
    prefix: "fl",
    body: "for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length; ${1:i} < ${2:len}; ${1:i}++) {\n\t${0}\n}"
  },
  for in loop: {
    prefix: "fi",
    body: "for (let ${1:key} in ${2:source}) {\n\tif (${2:source}.hasOwnProperty(${1:key})) {\n\t\t${0}\n\t}\n}"
  },
  for of loop: {
    prefix: "fo",
    body: "for (let ${1:key} of ${2:source}) {\n\t${0}\n}"
  },
  while loop: {
    prefix: "wl",
    body: "while (${1:condition}) {\n\t${0}\n}"
  },
  try/catch: {
    prefix: "tc",
    body: "try {\n\t${0}\n} catch (${1:err}) {\n\t\n}"
  },
  try/finally: {
    prefix: "tf",
    body: "try {\n\t${0}\n} finally {\n\t\n}"
  },
  try/catch/finally: {
    prefix: "tcf",
    body: "try {\n\t${0}\n} catch (${1:err}) {\n\t\n} finally {\n\t\n}"
  },
  switch case: {
    prefix: "sw",
    body: "switch (${1:expr}) {\n\tcase ${2:value}:\n\t\treturn $0;\n\tdefault:\n\t\treturn;\n}"
  },
  immediatelyInvoked function expression: {
    prefix: "iife",
    body: "((${1:arguments}) => {\n\t${0}\n})(${2});"
  },
  function apply: {
    prefix: "fa",
    body: "${1:fn}.apply(${2:this}, ${3:arguments})"
  },
  function call: {
    prefix: "fc",
    body: "${1:fn}.call(${2:this}, ${3:arguments})"
  },
  function bind: {
    prefix: "fb",
    body: "${1:fn}.bind(${2:this}, ${3:arguments})"
  },
  arrow function: {
    prefix: "af",
    body: "(${1:arguments}) => ${2:statement}"
  },
  sequence: {
    prefix: "seq",
    body: "[...Array(${1:length}).keys()]${0}"
  },
  forEach loop: {
    prefix: "fe",
    body: "${1:iterable}.forEach((${2:item}) => {\n\t${0}\n});"
  },
  chain forEach: {
    prefix: ".fe",
    body: ".forEach((${1:item}) => {${0}})"
  },
  map: {
    prefix: "map",
    body: "${1:iterable}.map((${2:item}) => {\n\t${0}\n});"
  },
  chain map: {
    prefix: ".map",
    body: ".map((${1:item}) => {${0}})"
  },
  reduce: {
    prefix: "reduce",
    body: "${1:iterable}.reduce((${2:previous}, ${3:current}) => {\n\t${0}\n}${4:, initial});"
  },
  chain reduce: {
    prefix: ".reduce",
    body: ".reduce((${1:previous}, ${2:current}) => {${0}}${4:, initial})"
  },
  filter: {
    prefix: "filter",
    body: "${1:iterable}.filter(${2:item} => {\n\t${0}\n});"
  },
  chain filter: {
    prefix: ".filter",
    body: ".filter((${1:item}) => {${0}})"
  },
  find: {
    prefix: "find",
    body: "${1:iterable}.find(${2:item} => {\n\t${0}\n});"
  },
  chain find: {
    prefix: ".find",
    body: ".find((${1:item}) => {${0}})"
  },
  module export: {
    prefix: "ex",
    body: "export ${1:member};"
  },
  module default export: {
    prefix: "exd",
    body: "export default ${1:member};"
  },
  import module: {
    prefix: "im",
    body: "import ${1:*} from '${2:module}';"
  },
  import module as: {
    prefix: "ima",
    body: "import ${1:*} as ${2:name} from '${3:module}';"
  },
  import module inline: {
    prefix: "imn",
    body: "import '${1:module}';"
  },
  import module destructured: {
    prefix: "imd",
    body: "import { ${1:*} } from '${2:module}';"
  },
  event handler: {
    prefix: "on",
    body: "${1:emitter}.on('${2:event}', (${3:arguments}) => {\n\t${0}\n});"
  },
  chain event handler: {
    prefix: ".on",
    body: ".on('${2:event}', (${3:arguments}) => {${0}});"
  },
  key/value pair: {
    prefix: "kv",
    body: "${1:key}: ${2:value}"
  },
  method: {
    prefix: "fn",
    body: "const ${1:method} = (${2:arguments}) => {\n\t${0}\n}"
  },
  destructured object: {
    prefix: "dob",
    body: "const { ${1:property} } = ${2:object};"
  },
  destructured array: {
    prefix: "dar",
    body: "const [${1:property}] = ${2:array};"
  },
  getter: {
    prefix: "get",
    body: "get ${1:property}() {\n\t${0}\n}"
  },
  setter: {
    prefix: "set",
    body: "set ${1:property}(${2:value}) {\n\t${0}\n}"
  },
  getter + setter: {
    prefix: "gs",
    body: "get ${1:property}() {\n\t${0}\n}\nset ${1:property}(${2:value}) {\n\t\n}"
  },
  prototype method: {
    prefix: "proto",
    body: "${1:Class}.prototype.${2:method} = (${3:arguments}) => {\n\t${0}\n};"
  },
  chain prototype method: {
    prefix: ".proto",
    body: ".prototype.${2:methodName} = (${3:arguments}) => {\n\t${0}\n}"
  },
  Object.assign: {
    prefix: "oa",
    body: "Object.assign(${1:dest}, ${2:source})"
  },
  Object.assign copy: {
    prefix: "oc",
    body: "Object.assign({}, ${1:original}, ${2:source})"
  },
  require: {
    prefix: "re",
    body: "require('${1:module}')"
  },
  exports.member: {
    prefix: "em",
    body: "exports.${1:member} = ${2:value};"
  },
  module.exports: {
    prefix: "me",
    body: "module.exports = ${1:name};"
  },
  module as class: {
    prefix: "mc",
    body: "var ${1:name} = (() => {\n\tconst ${1:name} = (${2:arguments}) => {\n\t\t${0}\n\t};\n\treturn ${1:name};\n})();\nmodule.exports = ${1:name};"
  },
  return promise: {
    prefix: "rp",
    body: "return new Promise((resolve, reject) => {\n\t${0}\n});"
  },
  setTimeout: {
    prefix: "st",
    body: "setTimeout(() => {\n\t${0}\n}, ${1:delay});"
  },
  setInterval: {
    prefix: "si",
    body: "setInterval(() => {\n\t${0}\n}, ${1:delay});"
  },
  setImmediate: {
    prefix: "sim",
    body: "setImmediate(() => {\n\t${0}\n});"
  },
  process nextTick: {
    prefix: "nt",
    body: "process.nextTick(() => {\n\t${1:}\n});"
  },
  typeof: {
    prefix: "tof",
    body: "typeof ${1:source} === '${2:undefined}'"
  },
  instanceof: {
    prefix: "iof",
    body: "${1:source} instanceof ${2:Object}"
  }
}
