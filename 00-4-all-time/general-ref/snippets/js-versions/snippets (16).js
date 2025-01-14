{  
  Var Statement: {
		prefix: ["var", "v"],
		body: [
			"var ${0}"
		],
		description: "Var Statement"
  },

  Var Assignment: {
		prefix: ["var=", "v="],
		body: [
			"var ${1:name} = ${0:value}"
		],
		description: "Var Assignment"
  },

  Let Statement: {
		prefix: ["let", "l"],
		body: [
			"let ${0}"
		],
		description: "Let Statement"
  },

  Let Assignment: {
		prefix: ["let=", "l="],
		body: [
			"let ${1:name} = ${0:value}"
		],
		description: "Let Assignment"
  },

  Destructuring Let Assignment: {
		prefix: "ld",
		body: [
			"let { ${1:name} } = ${0:value}"
		],
		description: "Destructuring Let Assignment"
  },

  Const Statement: {
		prefix: ["const", "c"],
		body: [
			"const ${0}"
		],
		description: "Const Statement"
  },

  Const Assignment: {
		prefix: ["const=", "c="],
		body: [
			"const ${1:name} = ${0:value}"
		],
		description: "Const Assignment"
  },

  Destructuring Const Assignment: {
		prefix: "cd",
		body: [
			"const { ${1:name} } = ${0:value}"
		],
		description: "Destructuring Const Assignment"
  },

  Length Statement: {
		prefix: "length",
		body: [
			"length"
		],
		description: "Length Statement"
  },

  Break Statement: {
		prefix: "break",
		body: [
			"break"
		],
		description: "Break Statement"
  },

  Continue Statement: {
		prefix: ["ct", "continue"],
		body: [
			"continue"
		],
		description: "Continue Statement"
  },

  Default Keyword: {
		prefix: "default",
		body: [
      "default${0:: }"
		],
		description: "Default Keyword"
  },

  Debugger Statement: {
		prefix: "debugger",
		body: [
			"debugger"
		],
		description: "Debugger Statement"
  },

  Empty Statement: {
		prefix: "empty",
		body: [
			"empty"
		],
		description: "Empty Statement"
  },

  Return Statement: {
		prefix: ["ret", "return"],
		body: [
			"return${0: }"
		],
		description: "Return Statement"
  },

  Throw Statement: {
		prefix: ["thr", "throw"],
		body: [
			"throw ${0}"
		],
		description: "Throw Statement"
  },

  Yield Statement: {
		prefix: "yield",
		body: [
			"yield ${0}"
		],
		description: "Yield Statement"
  },

  Next Statement: {
		prefix: "next",
		body: [
			"next()"
		],
		description: "Next Statement"
  },

  As Keyword: {
		prefix: "as",
		body: [
      "as${0: }"
		],
		description: "As Keyword"
  },

  Size Keyword: {
		prefix: "size",
		body: [
      "size"
		],
		description: "Size Keyword"
  },

  Key-Value Pair: {
    prefix: ["kv", "keyValue"],
		body: [
			"${1:key}: ${2:value}${0}"
		],
		description: "Key-Value Pair"
  },

  For Loop: {
    prefix: "for",
		body: [
			"for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length; ${1:i} < ${2:len}; ${1:i}++) {",
      "\t${0}",
      "}"
		],
		description: "For Loop"
  },

  Reverse For Loop: {
    prefix: "forr",
		body: [
			"for (let ${1:i} = ${2:iterable}.length - 1; ${1:i} >= 0; ${1:i}--) {",
      "\t${0}",
      "}"
		],
		description: "Reverse For Loop"
  },

  Do-While Statement: {
		prefix: ["do", "doWhile"],
		body: [
			"do {",
      "\t${0}",
      "} while (${1:condition})"
		],
		description: "Do-While Statement"
  },

  While Statement: {
    prefix: "while",
    body: [
			"while (${1:condition}) {",
      "\t${0}",
      "}"
		],
		description: "While Statement"
  },

  For-In Statement: {
    prefix: "fori",
		body: [
			"for (const ${1:item} in ${2:object}) {",
      "\tif (${2:object}.hasOwnProperty(${1:item})) {",
      "\t\t${0}",
      "\t}",
      "}"
		],
		description: "For-In Statement. Not be used to iterate over an Array"
  },

  For-Of Statement: {
    prefix: "foro",
		body: [
			"for (const ${1:iterator} of ${2:object}) {",
      "\t${0}",
      "}"
		],
		description: "For-Of Statement"
  },

  forEach Statement: {
    prefix: "fore",
		body: [
			"${1}forEach((${2:item}, ${3:key}) => {",
      "\t${0}",
      "})"
		],
		description: "forEach Statement"
  },

  keys Statement: {
    prefix: "keys",
    body: [
      "${1}keys()${0}"
    ],
    description: "keys Statement"
  },

  values Statement: {
    prefix: "values",
    body: [
      "${1}values()${0}"
    ],
    description: "values Statement"
  },

  entries Statement: {
    prefix: "entries",
    body: [
      "${1}entries()${0}"
    ],
    description: "entries Statement"
  },

  If Statement: {
    prefix: "if",
		body: [
			"if (${0:condition}) ${1}"
		],
		description: "If Statement"
  },
  
  Else Statement: {
    prefix: "el",
		body: [
			"else {",
      "\t${0}",
      "}"
		],
		description: "Else Statement"
  },

  If-Else Statement: {
    prefix: "ife",
		body: [
			"if (${1:condition}) {",
      "\t${0}",
      "} else {",
      "\t${2}",
      "}"
		],
		description: "If-Else Statement"
  },

  Else-If Statement: {
    prefix: "eli",
		body: [
			"else if (${1:condition}) {",
      "\t${0}",
      "}"
		],
		description: "Else-If Statement"
  },

  Ternary Operator: {
    prefix: "ter",
		body: [
			"${1:condition} ? ${2:expression} : ${0:expression}"
		],
		description: "Ternary Operator"
  },

  Switch Case: {
    prefix: "switch",
    body: [
			"switch (${1:expr}) {",
      "\tcase ${2:value}:",
      "\t\t${0}",
      "\t\t${3:break}",
      "\tdefault:",
      "\t\t",
      "}"
		],
		description: "Switch Case"
  },

  Case Statement: {
    prefix: "case",
    body: [
      "case ${1:value}:",
      "\t${0}",
      "\t${2:break}"
		],
		description: "Case Statement"
  },

  Try-Catch Statement: {
    prefix: "try",
    body: [
			"try {",
      "\t",
      "} catch (${1:e}) {",
      "\t${0}",
      "}"
		],
		description: "Try-Catch Statement"
  },

  Catch Statement: {
    prefix: "tryc",
    body: [
			"catch (${1:e}) {",
      "\t${0}",
      "}"
		],
		description: "Catch Statement"
  },

  Try-Finally Statement: {
    prefix: "tryf",
    body: [
      "finally {",
      "\t${0}",
      "}"
		],
		description: "Try-Finally Statement"
  },

  Try-Catch-Finally Statement: {
    prefix: "trycf",
    body: [
			"try {",
      "\t",
      "} catch (${1:e}) {",
      "\t",
      "} finally {",
      "\t${0}",
      "}"
		],
		description: "Try-Catch-Finally Statement"
  },

  Named Function: {
    prefix: "func",
    body: [
      "function ${1:name}(${2:args}) {",
      "\t${0}",
      "}"
		],
		description: "Named Function"
  },

  Arrow Function: {
    prefix: "af",
    body: [
      "(${1:args}) => ${0}"
		],
		description: "Arrow Function"
  },

  IIFE: {
    prefix: "iife",
    body: [
      ";((${1:args}) => {",
      "\t${0}",
      "})(${2})"
		],
    description: "IIFE"
  },

  Named Arrow Function Expressions: {
    prefix: "afn",
    body: [
      "const ${1:name} = (${2:args}) => {",
      "\t${0}",
      "}"
		],
		description: "Named Arrow Function Expressions"
  },

  Generator Function: {
    prefix: "funcg",
    body: [
      "function* ${1:name}(${2:args}) {",
      "\t${0}",
      "}"
		],
		description: "Generator Function"
  },

  Function.prototype.call(): {
    prefix: "call",
    body: [
      "${1}call(${2:this}, ${3:args})${0}"
		],
    description: "Function.prototype.call()"
  },

  Function.prototype.apply(): {
    prefix: "apply",
    body: [
      "${1}apply(${2:this}, ${3:args})${0}"
		],
    description: "Function.prototype.apply()"
  },

  Function.prototype.bind(): {
    prefix: "bind",
    body: [
      "${1}bind(${2:this}${3:, args})${0}"
		],
    description: "Function.prototype.bind()"
  },

  concat() Method: {
    prefix: ["cc", "concat"],
    body: [
      "concat(${1})${0}"
    ],
    description: "concat() Method"
  },

  includes() Method: {
    prefix: "includes",
    body: [
      "includes(${1})${0}"
    ],
    description: "includes() Method"
  },

  indexOf() Method: {
    prefix: "indexOf",
    body: [
      "indexOf(${1})${0}"
    ],
    description: "indexOf() Method"
  },

  lastIndexOf() Method: {
    prefix: "lastIndexOf",
    body: [
      "lastIndexOf(${1})${0}"
    ],
    description: "lastIndexOf() Method"
  },

  slice() Method: {
    prefix: "slice",
    body: [
      "slice(${1})${0}"
    ],
    description: "slice() Method"
  },

  toString() Method: {
    prefix: "toString",
    body: [
      "toString()${0}"
    ],
    description: "toString() Method"
  },

  Array.from(): {
    prefix: "from",
		body: [
      "Array.from(${1:arrayLike})${0}"
		],
		description: "Array.from()"
  },

  Array.isArray(): {
    prefix: "isArray",
		body: [
      "Array.isArray(${1:value})${0}"
		],
		description: "Array.isArray()"
  },

  Array.of(): {
    prefix: "of",
		body: [
      "Array.of(${1:value})${0}"
		],
		description: "Array.isArray()"
  },

  Array.prototype.copyWithin(): {
    prefix: ["cw", "copyWithin"],
    body: [
      "copyWithin(${1})${0}"
    ],
    description: "Array.prototype.copyWithin()"
  },

  Array.prototype.every(): {
    prefix: "every",
    body: [
      "every(${1})${0}"
    ],
    description: "Array.prototype.every()"
  },

  Array.prototype.fill(): {
    prefix: "fill",
    body: [
      "fill(${1})${0}"
    ],
    description: "Array.prototype.fill()"
  },

  Array.prototype.filter(): {
    prefix: "filter",
		body: [
			"${1}filter((${2:item}, ${3:key}) => {",
      "\t${0}",
      "})"
		],
		description: "Array.prototype.filter()"
  },

  Array.prototype.find(): {
    prefix: "find",
		body: [
			"${1}find((${2:item}) => {",
      "\t${0}",
      "})"
		],
		description: "Array.prototype.find()"
  },

  Array.prototype.findIndex(): {
    prefix: "findIndex",
    body: [
      "findIndex(${1})${0}"
    ],
    description: "Array.prototype.findIndex()"
  },

  Array.prototype.flat(): {
    prefix: "flat",
    body: [
      "flat(${1:Infinity})${0}"
    ],
    description: "Array.prototype.flat()"
  },

  Array.prototype.flatMap(): {
    prefix: "flatMap",
    body: [
      "${1}flatMap((${2:item}, ${3:key}) => {",
      "\t${0}",
      "})"
    ],
    description: "Array.prototype.flatMap()"
  },

  Array.prototype.join(): {
    prefix: "join",
    body: [
      "join(${1})${0}"
    ],
    description: "Array.prototype.join()"
  },

  Array.prototype.map(): {
    prefix: "map",
		body: [
			"${1}map((${2:item}, ${3:key}) => {",
      "\t${0}",
      "})"
		],
		description: "Array.prototype.map()"
  },

  Array.prototype.pop(): {
    prefix: "pop",
    body: [
      "pop()${0}"
    ],
    description: "Array.prototype.pop()"
  },

  Array.prototype.push(): {
    prefix: "push",
    body: [
      "push(${1})${0}"
    ],
    description: "Array.prototype.push()"
  },

  Array.prototype.reduce(): {
    prefix: "reduce",
		body: [
			"${1}reduce((${2:acc}, ${3:cur}) => {",
      "\t${0}",
      "}${4:, initialValue})"
		],
		description: "Array.prototype.reduce()"
  },

  Array.prototype.reduceRight(): {
    prefix: "reduceRight",
		body: [
			"${1}reduceRight((${2:acc}, ${3:cur}) => {",
      "\t${0}",
      "}${4:, initialValue})"
		],
		description: "Array.prototype.reduceRight()"
  },

  Array.prototype.reverse(): {
    prefix: "reverse",
    body: [
      "reverse()"
    ],
    description: "Array.prototype.reverse()"
  },

  Array.prototype.shift(): {
    prefix: "shift",
    body: [
      "shift()"
    ],
    description: "Array.prototype.shift()"
  },

  Array.prototype.some(): {
    prefix: "some",
		body: [
			"${1}some((${2:item}, ${3:key}) => {",
      "\t${0}",
      "})"
		],
		description: "Array.prototype.some()"
  },

  Array.prototype.sort(): {
    prefix: "sort",
		body: [
			"${1}sort((${2:a}, ${3:b}) => ${2:a} - ${3:b})${0}"
		],
		description: "Array.prototype.sort()"
  },

  Array.prototype.splice(): {
    prefix: "splice",
    body: [
      "splice(${1})${0}"
    ],
    description: "Array.prototype.splice()"
  },

  Array.prototype.toLocaleString(): {
    prefix: ["tls", "toLocaleString"],
    body: [
      "toLocaleString(${1})${0}"
    ],
    description: "Array.prototype.toLocaleString()"
  },

  Array.prototype.unshift(): {
    prefix: "unshift",
    body: [
      "unshift(${1})${0}"
    ],
    description: "Array.prototype.unshift()"
  },

  String.fromCharCode(): {
    prefix: ["fromch", "fromCharCode"],
    body: [
      "String.fromCharCode(${1})${0}"
    ],
    description: "String.fromCharCode()"
  },
  
  String.fromCodePoint(): {
    prefix: ["fromco", "fromCodePoint"],
    body: [
      "String.fromCodePoint(${1})${0}"
    ],
    description: "String.fromCodePoint()"
  },
  
  String.raw(): {
    prefix: "raw",
    body: [
      "String.raw(${1})${0}"
    ],
    description: "String.raw()"
  },

  String.prototype.charAt(): {
    prefix: "charAt",
    body: [
      "${1:str.}charAt(${2})${0}"
    ],
    description: "String.prototype.charAt()"
  },
  
  String.prototype.charCodeAt(): {
    prefix: "charCodeAt",
    body: [
      "${1:str.}charCodeAt(${2})${0}"
    ],
    description: "String.prototype.charCodeAt()"
  },

  String.prototype.codePointAt(): {
    prefix: "codePointAt",
    body: [
      "${1:str.}codePointAt(${2})${0}"
    ],
    description: "String.prototype.codePointAt()"
  },

  String.prototype.endsWith(): {
    prefix: "endsWith",
    body: [
      "${1:str.}endsWith(${2}${3:, length})${0}"
    ],
    description: "String.prototype.endsWith()"
  },

  String.prototype.localeCompare(): {
    prefix: "localeCompare",
    body: [
      "${1:str.}localeCompare(${2})${0}"
    ],
    description: "String.prototype.localeCompare()"
  },

  String.prototype.match(): {
    prefix: "match",
    body: [
      "${1:str.}match(${2:regexp})${0}"
    ],
    description: "String.prototype.match()"
  },

  String.prototype.matchAll(): {
    prefix: "matchAll",
    body: [
      "${1:str.}matchAll(${2:regexp})${0}"
    ],
    description: "String.prototype.matchAll()"
  },

  String.prototype.normalize(): {
    prefix: "normalize",
    body: [
      "${1:str.}normalize(${2})${0}"
    ],
    description: "String.prototype.normalize()"
  },
 
  String.prototype.padEnd(): {
    prefix: "padEnd",
    body: [
      "${1:str.}padEnd(${2})${0}"
    ],
    description: "String.prototype.padEnd()"
  },

  String.prototype.padStart(): {
    prefix: "padStart",
    body: [
      "${1:str.}padStart(${2})${0}"
    ],
    description: "String.prototype.padStart()"
  },

  String.prototype.repeat(): {
    prefix: "repeat",
    body: [
      "${1:str.}repeat(${2:count})${0}"
    ],
    description: "String.prototype.repeat()"
  },

  String.prototype.replace(): {
    prefix: "replace",
    body: [
      "${1:str.}replace(${2}, ${3})${0}"
    ],
    description: "String.prototype.replace()"
  },

  String.prototype.search(): {
    prefix: "search",
    body: [
      "${1:str.}search(${2:regexp})${0}"
    ],
    description: "String.prototype.search()"
  },

  String.prototype.split(): {
    prefix: "split",
    body: [
      "${1:str.}split(${2})${0}"
    ],
    description: "String.prototype.split()"
  },

  String.prototype.startsWith(): {
    prefix: "startsWith",
    body: [
      "${1:str.}startsWith(${2})${0}"
    ],
    description: "String.prototype.startsWith()"
  },

  String.prototype.substring(): {
    prefix: "substring",
    body: [
      "${1:str.}substring(${2})${0}"
    ],
    description: "String.prototype.substring()"
  },

  String.prototype.toLocaleLowerCase(): {
    prefix: ["tll", "toLocaleLowerCase"],
    body: [
      "${1:str.}toLocaleLowerCase(${2})${0}"
    ],
    description: "String.prototype.toLocaleLowerCase()"
  },

  String.prototype.toLocaleUpperCase(): {
    prefix: ["tlu", "toLocaleUpperCase"],
    body: [
      "${1:str.}toLocaleUpperCase(${2})${0}"
    ],
    description: "String.prototype.toLocaleUpperCase()"
  },

  String.prototype.toLowerCase(): {
    prefix: ["tlc", "toLowerCase"],
    body: [
      "${1:str.}toLowerCase(${2})${0}"
    ],
    description: "String.prototype.toLowerCase()"
  },
  
  String.prototype.toUpperCase(): {
    prefix: ["tou", "toUpperCase"],
    body: [
      "${1:str.}toUpperCase()${0}"
    ],
    description: "String.prototype.toUpperCase()"
  },

  String.prototype.trim(): {
    prefix: "trim",
    body: [
      "${1:str.}trim()${0}"
    ],
    description: "String.prototype.trim()"
  },
  
  String.prototype.trimEnd(): {
    prefix: "trimEnd",
    body: [
      "${1:str.}trimEnd()${0}"
    ],
    description: "String.prototype.trimEnd()"
  },

  String.prototype.trimStart(): {
    prefix: "trimStart",
    body: [
      "${1:str.}trimStart()${0}"
    ],
    description: "String.prototype.trimStart()"
  },

  String.prototype.valueOf(): {
    prefix: "valueOf",
    body: [
      "${1:str.}valueOf()${0}"
    ],
    description: "String.prototype.valueOf()"
  },

  Object.assign(): {
    prefix: "assign",
		body: [
			"Object.assign(${1:target}, ${2:...source})${0}"
		],
		description: "Object.assign()"
  },

  Object.create(): {
    prefix: "create",
    body: [
      "Object.create(${1})${0}"
    ],
    description: "Object.create()"
  },

  Object.defineProperties(): {
    prefix: ["dp", "defineProperties"],
    body: [
      "Object.defineProperties(${1:obj}, {",
      "\tconfigurable: ${2:false},",
      "\tenumerable: ${3:false},",
      "\twritable: ${4:false},",
      "\tvalue: ${5:undefined},",
      "\t${0}",
      "})"
    ],
    description: "Object.defineProperties()"
  },

  Object.defineProperty(): {
    prefix: ["dp", "defineProperty"],
    body: [
      "Object.defineProperty(${1:obj}, ${1:prop}, {",
      "\tconfigurable: ${2:false},",
      "\tenumerable: ${3:false},",
      "\twritable: ${4:false},",
      "\tvalue: ${5:undefined},",
      "\t${0}",
      "})"
    ],
    description: "Object.defineProperty()"
  },

  Object.entries(): {
    prefix: "entries",
    body: [
      "Object.entries(${1})${0}"
    ],
    description: "Object.entries()"
  },

  Object.freeze(): {
    prefix: "freeze",
    body: [
      "Object.freeze(${1})${0}"
    ],
    description: "Object.freeze()"
  },

  Object.fromEntries(): {
    prefix: "fromEntries",
    body: [
      "Object.fromEntries(${1:iterable})${0}"
    ],
    description: "Object.fromEntries()"
  },

  Object.getOwnPropertyDescriptor(): {
    prefix: ["gopd", "getOwnPropertyDescriptor"],
    body: [
      "Object.getOwnPropertyDescriptor(${1:obj}, ${2:key})${0}"
    ],
    description: "Object.getOwnPropertyDescriptor()"
  },

  Object.getOwnPropertyDescriptors(): {
    prefix: ["gopd", "getOwnPropertyDescriptors"],
    body: [
      "Object.getOwnPropertyDescriptors(${1:obj})${0}"
    ],
    description: "Object.getOwnPropertyDescriptors()"
  },

  Object.getOwnPropertyNames(): {
    prefix: ["gopn", "getOwnPropertyNames"],
    body: [
      "Object.getOwnPropertyNames(${1:obj})${0}"
    ],
    description: "Object.getOwnPropertyNames()"
  },

  Object.getOwnPropertySymbols(): {
    prefix: ["gops", "getOwnPropertySymbols"],
    body: [
      "Object.getOwnPropertySymbols(${1:obj})${0}"
    ],
    description: "Object.getOwnPropertySymbols()"
  },

  Object.getPrototypeOf(): {
    prefix: ["gpo", "getPrototypeOf"],
    body: [
      "Object.getPrototypeOf(${1:obj})${0}"
    ],
    description: "Object.getPrototypeOf()"
  },

  Object.is(): {
    prefix: "is",
    body: [
      "Object.is(${1:value1}, ${2:value2})${0}"
    ],
    description: "Object.is()"
  },

  Object.isExtensible(): {
    prefix: "isExtensible",
    body: [
      "Object.isExtensible(${0:obj})"
    ],
    description: "Object.isExtensible()"
  },

  Object.isFrozen(): {
    prefix: "isFrozen",
    body: [
      "Object.isFrozen(${1:obj})${0}"
    ],
    description: "Object.isFrozen()"
  },

  Object.isSealed(): {
    prefix: "isSealed",
    body: [
      "Object.isSealed(${1:obj})${0}"
    ],
    description: "Object.isSealed()"
  },

  Object.keys(): {
    prefix: "keys",
    body: [
      "Object.keys(${1:obj})${0}"
    ],
    description: "Object.keys()"
  },

  Object.preventExtensions(): {
    prefix: ["pe", "preventExtensions"],
    body: [
      "Object.preventExtensions(${1:obj})${0}"
    ],
    description: "Object.preventExtensions()"
  },

  Object.seal(): {
    prefix: "seal",
    body: [
      "Object.seal(${1:obj})${0}"
    ],
    description: "Object.seal()"
  },

  Object.setPrototypeOf(): {
    prefix: "setPrototypeOf",
    body: [
      "Object.setPrototypeOf(${1:obj}, ${2:null})${0}"
    ],
    description: "Object.setPrototypeOf()"
  },
  
  Object.values(): {
    prefix: "values",
    body: [
      "Object.values(${1:obj})${0}"
    ],
    description: "Object.values()"
  },

  Object.prototype.hasOwnProperty(): {
    prefix: "hasOwnProperty",
    body: [
      "${1:obj.}hasOwnProperty(${2:item})${0}"
    ],
    description: "Object.prototype.hasOwnProperty()"
  },

  Object.prototype.isPrototypeOf(): {
    prefix: "isPrototypeOf",
    body: [
      "${1:prototypeObj.}isPrototypeOf(${2:obj})${0}"
    ],
    description: "Object.prototype.isPrototypeOf()"
  },

  Object.prototype.propertyIsEnumerable(): {
    prefix: ["pi", "propertyIsEnumerable"],
    body: [
      "propertyIsEnumerable(${1:obj})${0}"
    ],
    description: "Object.prototype.propertyIsEnumerable()"
  },

  Object.prototype.toLocaleString(): {
    prefix: ["tls", "tolocalestring"],
    body: [
      "toLocaleString(${1:obj})${0}"
    ],
    description: "Object.prototype.toLocaleString()"
  },

  Object.prototype.valueOf(): {
    prefix: "valueOf",
    body: [
      "${1:object}.${2:prototype}.valueOf = function () {",
      "\t${0}",
      "}"
    ],
    description: "Object.prototype.valueOf()"
  },

  Clear() Method: {
    prefix: "clear",
    body: [
      "${1}clear()${0}"
    ],
    description: "Clear() Method"
  },

  Delete() Method: {
    prefix: "delete",
    body: [
      "${1}delete(${2})${0}"
    ],
    description: "Delete() Method"
  },

  Has() Method: {
    prefix: "has",
    body: [
      "${1}has(${2})${0}"
    ],
    description: "Has() Method"
  },

  Add() Method: {
    prefix: "add",
    body: [
      "${1}add(${2})${0}"
    ],
    description: "Add() Method"
  },

  Get() Method: {
    prefix: "get",
    body: [
      "${1}get(${2})${0}"
    ],
    description: "Get() Method"
  },

  Set() Method: {
    prefix: "set",
    body: [
      "${1}set(${2})${0}"
    ],
    description: "Set() Method"
  },

  Class Elements: {
    prefix: "class",
		body: [
      "class ${1:name} {",
      "\tconstructor(${2:args}) {",
      "\t\t${0}",
      "\t}",
      "}"
		],
		description: "Class Elements"
  },

  Class Constructor: {
    prefix: ["cs", "constructor"],
		body: [
      "constructor(${1:args}) {",
      "\t${0}",
      "}"
		],
		description: "Class Constructor"
  },

  Class Extends: {
    prefix: "extends",
		body: [
      "class ${1:name} extends ${2:base} {",
      "\tconstructor(${3:args}) {",
      "\t\tsuper(${3:args})",
      "\t\t${0}",
      "\t}",
      "}"
		],
		description: "Class Extends"
  },

  Class Static Statement: {
    prefix: "staticStatement",
		body: [
      "static ${1:name} = ${0}"
		],
		description: "Class Static Statement"
  },

  Class Static Method: {
    prefix: "staticMethod",
		body: [
      "static ${1:name}() {",
      "\t${0}",
      "}"
		],
		description: "Class Static Method"
  },

  Prototype Method: {
    prefix: ["pt", "prototype"],
		body: [
      "${1:name}.prototype.${2:method} = function (${3:args}) {",
      "\t${0}",
      "}"
		],
		description: "Prototype Method"
  },

  Getter: {
    prefix: "gett",
		body: [
			"get ${1:property}() {",
      "\t${0}",
      "}"
		],
		description: "Getter"
  },

  Setter: {
    prefix: "sett",
		body: [
			"set ${1:property}(${2:value}) {",
      "\t${0}",
      "}"
		],
		description: "Setter"
  },

  Typeof: {
    prefix: "typeof",
		body: [
      "typeof ${1:source} === '${0:undefined}'"
		],
		description: "Typeof"
  },

  Instanceof: {
    prefix: "instanceof",
		body: [
      "${1}instanceof ${0:Object}"
		],
		description: "Instanceof"
  },

  Return Promise: {
    prefix: "retp",
		body: [
      "return new Promise((resolve, reject) => {",
      "\t${0:resolve()}",
      "})"
		],
		description: "Return Promise"
  },

  Promise: {
    prefix: "pro",
		body: [
      "new Promise((resolve, reject) => {",
      "\t${0:resolve()}",
      "})"
		],
		description: "Promise"
  },

  Promise.prototype.then(): {
    prefix: "prot",
		body: [
      "${1:Promise.}then(${2})${0}"
		],
		description: "Promise.prototype.then()"
  },

  Promise.prototype.catch(): {
    prefix: "proc",
		body: [
      "${1:Promise.}catch(${2})${0}"
		],
		description: "Promise.prototype.catch()"
  },

  Promise.prototype.finally(): {
    prefix: "prof",
		body: [
      "${1:Promise.}finally(${2})${0}"
		],
		description: "Promise.prototype.finally()"
  },

  Promise.all(): {
    prefix: "proall",
		body: [
      "Promise.all(${1:iterable})${0}"
		],
		description: "Promise.all()"
  },

  Promise.race(): {
    prefix: ["prorace", "race"],
		body: [
      "Promise.race(${1:iterable})${0}"
		],
		description: "Promise.race()"
  },

  Promise.allSettled(): {
    prefix: ["proall", "allSettled"],
		body: [
      "Promise.allSettled(${1:iterable})${0}"
		],
		description: "Promise.allSettled()"
  },

  Promise.any(): {
    prefix: "proany",
		body: [
      "Promise.any(${1:iterable})${0}"
		],
		description: "Promise.any()"
  },

  Promise.reject(): {
    prefix: "reject",
		body: [
      "${1:Promise.}reject(${2})${0}"
		],
		description: "Promise.reject()"
  },

  Promise.resolve(): {
    prefix: "resolve",
		body: [
      "${1:Promise.}resolve(${2})${0}"
		],
		description: "Promise.resolve()"
  },

  Async Statement: {
    prefix: "async",
		body: [
      "async"
		],
		description: "Async Statement"
  },

  Await Statement: {
    prefix: "await",
		body: [
      "await ${0:expr}"
		],
		description: "Await Statement"
  },

  ES Export: {
    prefix: "exp",
		body: [
      "export ${0:member}"
		],
		description: "Export"
  },

  ES Export Default: {
    prefix: "expd",
		body: [
      "export default ${0:member}"
		],
		description: "Export Default"
  },

  ES Export Function: {
    prefix: "expf",
		body: [
      "export const ${1:name} = (${2:args}) => {",
      "\t${0}",
      "}"
		],
		description: "Export Function"
  },

  ES Import External Module: {
    prefix: "imp",
		body: [
      "import ${1:*} from '${0:module}'"
		],
		description: "ES Import External Module"
  },

  ES Import Destructuring: {
    prefix: "impd",
		body: [
      "import { ${1:*} } from '${0:module}'"
		],
		description: "ES Import Destructuring"
  },

  CommonJS Module Exports: {
    prefix: "me",
		body: [
      "module.exports = ${0:name}"
		],
		description: "CommonJS Module Exports"
  },

  CommonJS Module Exports Object: {
    prefix: "meo",
		body: [
      "module.exports = {",
      "\t${0:member}",
      "}"
		],
		description: "CommonJS Module Exports Object"
  },

  CommonJS Require: {
    prefix: "require",
		body: [
      "${1}require('${0:module}')"
		],
		description: "CommonJS Require"
  },

  Ctx Arrow Function: {
		prefix: "ctx",
		body: [
			"(ctx, next) => ${0}"
		],
		description: "Ctx Arrow Function"
	},

  SetTimeout: {
    prefix: "sett",
		body: [
      "setTimeout(() => {",
      "\t${0}",
      "}, ${1:delay})"
		],
		description: "SetTimeout"
  },

  SetInterval: {
    prefix: "seti",
		body: [
      "setInterval(() => {",
      "\t${0}",
      "}, ${1:delay})"
		],
		description: "SetInterval"
  },

  setImmediate: {
    prefix: "setim",
		body: [
      "setImmediate(() => {",
      "\t${0}",
      "})"
		],
		description: "setImmediate"
  },

  Process NextTick: {
    prefix: "nt",
		body: [
      "process.nextTick(() => {",
      "\t${0}",
      "})"
		],
		description: "Process NextTick"
  },

  Insert 'use strict' Statement: {
    prefix: "us",
    body: [
      "'use strict'"
		],
		description: "Insert 'use strict' Statement"
  },

  Print to log: {
		prefix: "log",
		body: [
      "console.log(${0})"
		],
		description: "Log output to console"
  },

  Print to error: {
    prefix: "err",
		body: [
			"console.error('${0} Error: ', ${1:e})"
		],
		description: "Error output to console"
  },

  Print to warn: {
    prefix: "warn",
		body: [
			"console.warn(${0})"
		],
		description: "Warn output to console"
  },

  Print to dir: {
    prefix: "dir",
		body: [
			"console.dir(${0})"
		],
		description: "Dir output to console"
  }
}
