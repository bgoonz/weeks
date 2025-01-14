{
  var assignment: {
    prefix: "va",
    body: "var ${1} = ${0}",
    description: "var assignment"
  },
  let assignment: {
    prefix: "la",
    body: "let ${1} = ${0}",
    description: "let assignment (ES2015)"
  },
  const assignment: {
    prefix: "ca",
    body: "const ${1} = ${0}",
    description: "const assignment (ES2015)"
  },
  var destructuring assignment: {
    prefix: "vad",
    body: "var ${0:dest} = ${1}",
    description: "var destructuring assignment (ES2015)"
  },
  let destructuring assignment: {
    prefix: "lad",
    body: "let ${0:dest} = ${1}",
    description: "let destructuring assignment (ES2015)"
  },
  const destructuring assignment: {
    prefix: "cad",
    body: "const ${0:dest} = ${1}",
    description: "const destructuring assignment (ES2015)"
  },

  if statement: {
    prefix: "if",
    body: "if (${1}) ${0}",
    description: "if statement"
  },
  else statement: {
    prefix: "el",
    body: "else ${0}",
    description: "else statement"
  },
  if/else statement: {
    prefix: "ifel",
    body: "if (${1}) ${2} else ${0}",
    description: "if/else statement"
  },
  else if statement: {
    prefix: "elif",
    body: "else if (${1}) ${0}",
    description: "else if statement"
  },
  ternary operator: {
    prefix: "ter",
    body: "${1} ? ${2} : ${0}",
    description: "ternary operator"
  },
  switch case: {
    prefix: "sw",
    body: "switch (${1}) {\n\tcase ${2} :\n\t\t$0\n\tdefault:\n\t\tbreak;\n}",
    description: "switch case"
  },
  case: {
    prefix: "case",
    body: "case ${1} :\n\t${0}",
    description: "switch's case"
  },

  for loop: {
    prefix: "fo",
    body: "for (${1} ; ${2} ; ${3}) ${0}",
    description: "for loop"
  },
  for in loop: {
    prefix: "foi",
    body: "for (const ${1} in ${2}) {\n\tif (${2}.hasOwnProperty(${1})) {\n\t\t${0}\n\t}\n}",
    description: "for in loop"
  },
  for of loop (ES2015): {
    prefix: "fof",
    body: "for (const ${1} of ${2}) ${0}",
    description: "for of loop (ES2015)"
  },
  for await of loop (ES2018): {
    prefix: "foa",
    body: "for await (const ${1} of ${2}) ${0}",
    description: "for await of loop (ES2018)"
  },
  while loop: {
    prefix: "wh",
    body: "while (${1}) ${0}",
    description: "while loop"
  },
  try/catch: {
    prefix: "tc",
    body: "try {${1}} catch ${2} {${0}}",
    description: "try/catch"
  },
  try/finally: {
    prefix: "tf",
    body: "try {${1}} finally {${0}}",
    description: "try/finally"
  },
  try/catch/finally: {
    prefix: "tcf",
    body: "try {${1}} catch ${2} {${3}} finally {${0}}",
    description: "try/catch/finally"
  },

  anonymous function: {
    prefix: "f",
    body: "function(${1}) {${0}}",
    description: "anonymous function"
  },
  named function: {
    prefix: "fn",
    body: "function ${1}(${2}) {${0}}",
    description: "named function"
  },
  async anonymous function: {
    prefix: "fa",
    body: "async function (${1}) {${0}}",
    description: "async anonymous function"
  },
  async named function: {
    prefix: "fna",
    body: "async function ${1}(${2}) {${0}}",
    description: "async named function"
  },
  arrow function (ES2015): {
    prefix: "af",
    body: "(${1}) => ${0}",
    description: "arrow function (ES2015)"
  },
  async arrow function (ES2015): {
    prefix: "afa",
    body: "async (${1}) => ${0}",
    description: "async arrow function (ES2015)"
  },
  immediatelyInvoked function expression (IIFE): {
    prefix: "iife",
    body: "(${2})(${1})${0}",
    description: "immediately-invoked function expression (IIFE)"
  },

  sequence of 0..n: {
    prefix: "seq",
    body: "[...Array(${1:length}).keys()]${0}",
    description: "sequence of 0..n"
  },

  object literal: {
    prefix: "ol",
    body: "{ ${1}: ${0} }",
    description: "object literal"
  },

  class (ES2015): {
    prefix: "cs",
    body: "class ${1} {\n\t${0}\n}",
    description: "class (ES2015)"
  },
  class extends (ES2015): {
    prefix: "cse",
    body: "class ${1} extends ${2:base} {\n\t${0}\n}",
    description: "class extends (ES2015)"
  },
  class constructor (ES2015): {
    prefix: "ctor",
    body: "constructor(${1}) {${0}}",
    description: "class constructor (ES2015)"
  },
  method (ES2015): {
    prefix: "csm",
    body: "${1:name}(${2}) {${0}}",
    description: "method (ES2015)"
  },
  async method (ES2015): {
    prefix: "csma",
    body: "async ${1:name}(${2}) {${0}}",
    description: "async method (ES2015)"
  },
  getter (ES2015): {
    prefix: "gter",
    body: "get ${1:property}() {${0}}",
    description: "getter (ES2015)"
  },
  setter (ES2015): {
    prefix: "ster",
    body: "set ${1:property}(${2:value}) {${0}}",
    description: "setter (ES2015)"
  },
  getter and setter (ES2015): {
    prefix: "gs",
    body: "get ${1:property}() {${0}}\n\nset ${1:property}(${2:value}) {}",
    description: "getter and setter (ES2015)"
  },

  typeof: {
    prefix: "tof",
    body: "typeof ${1:source} === ${0}",
    description: "typeof"
  },
  instanceof: {
    prefix: "iof",
    body: "${1:source} instanceof ${0:Class}",
    description: "instanceof"
  },

  Promise (ES2015): {
    prefix: "pr",
    body: "new Promise(${0})",
    description: "Promise (ES2015)"
  },
  Promise resolve (ES2015): {
    prefix: "prs",
    body: "Promise.resolve(${1})${0}",
    description: "Promise resolve (ES2015)"
  },
  Promise reject (ES2015): {
    prefix: "prj",
    body: "Promise.reject(${1})${0}",
    description: "Promise reject (ES2015)"
  },
  Promise all (ES2015): {
    prefix: "pra",
    body: "Promise.all(${1})${0}",
    description: "Promise all (ES2015)"
  },

  export (ES2015): {
    prefix: "exp",
    body: "export ${0}",
    description: "export (ES2015)"
  },
  export default (ES2015): {
    prefix: "expd",
    body: "export default ${0}",
    description: "export default (ES2015)"
  },
  export as (ES2015): {
    prefix: "expas",
    body: "export ${1} as ${2};${0}",
    description: "export as (ES2015)"
  },
  export from (ES2015): {
    prefix: "expf",
    body: "export ${2:name} from '${1}';${0}",
    description: "export from (ES2015)"
  },
  export all from (ES2015): {
    prefix: "expaf",
    body: "export *${2} from '${1}';${0}",
    description: "export all from (ES2015)"
  },
  import module (ES2015): {
    prefix: "imp",
    body: "import ${2:name} from '${1}';${0}",
    description: "import module (ES2015)"
  },
  import file (ES2015): {
    prefix: "impf",
    body: "import '${1}';${0}",
    description: "import file (ES2015)"
  },
  import module as (ES2015): {
    prefix: "impas",
    body: "import ${2:*} as ${3:name} from '${1}';${0}",
    description: "import module as (ES2015)"
  },

  Node.js style callback: {
    prefix: "cb",
    body: "(err, ${1:response}) => {${0}}",
    description: "Node.js style callback"
  },
  require: {
    prefix: "require",
    body: "require(${1:path})${0}",
    description: "require"
  },
  require assignment: {
    prefix: "req",
    body: "const ${2:name} = require('${1}');${0}",
    description: "require assignment"
  },
  exports.member: {
    prefix: "em",
    body: "exports.${1} = ${2};${0}",
    description: "exports.member"
  },
  module.exports: {
    prefix: "me",
    body: "module.exports = ${1}${0}",
    description: "module.exports"
  },
  event handler: {
    prefix: "on",
    body: "on('${1:event}', ${2:callback});${0}",
    description: "event handler"
  },

  console.log: {
    prefix: "cl",
    body: "console.log(${1})${0}",
    description: "console.log"
  },
  console.error: {
    prefix: "ce",
    body: "console.error(${1})${0}",
    description: "console.error"
  },
  console.warn: {
    prefix: "cw",
    body: "console.warn(${1})${0}",
    description: "console.warn"
  },
  console.dir: {
    prefix: "cd",
    body: "console.dir(${1})${0}",
    description: "console.dir"
  },
  console.time: {
    prefix: "ct",
    body: "console.time('${1}')\n${0}\nconsole.timeEnd('${1}')",
    description: "console.time"
  },

  setTimeout: {
    prefix: "sett",
    body: "setTimeout(${2:callback}, ${1:delay})${0}",
    description: "setTimeout"
  },
  setInterval: {
    prefix: "setin",
    body: "setInterval(${2:callback}, ${1:delay})${0}",
    description: "setInterval"
  },
  setImmediate: {
    prefix: "setim",
    body: "setImmediate(${1:callback}${2})${0}",
    description: "setImmediate (Node.JS)"
  },
  process nextTick: {
    prefix: "nt",
    body: "process.nextTick(${1});${0}",
    description: "process nextTick (Node.JS)"
  },

  insert 'use strict' statement: {
    prefix: "us",
    body: "'use strict';",
    description: "insert 'use strict' statement"
  }
}
