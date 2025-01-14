{
  Print log to console: {
      prefix: "clog",
      description: "Simple 'console.log();' print",
      body: [ "console.log($1);$0" ]
    },
    Print warning to console: {
      prefix: "cwarn",
      description: "Simple 'console.warn();' print",
      body: [ "console.warn($1);$0" ]
    },
   " Print error to console": {
      prefix: "cerr",
      description: "Simple 'console.error();' print",
      body: [ "console.error($1);$0" ]
    },
    "Create a stateless component": {
      prefix: "scomp",
      description: "A stateless component",
      body: [
        "import React from 'react';",
        "\nconst ${1:ComponentName} = () => {",
        "\treturn (",
        "\t\t$0",
        "\t);",
        "};",
        "\nexport default ${1:ComponentName};"
      ]
    },
    Create a React component: {
      prefix: "comp",
      description: "A React component",
      body: [
        "import React, { Component } from 'react';",
        "\nexport default class ${1:ComponentName} extends Component {",
        "\trender() {",
        "\t\treturn (",
        "\t\t\t$0",
        "\t\t);",
        "\t}",
        "}"
      ]
    },
    Create a React Native component: {
      prefix: "rncomp",
      description: "A React Native component",
      body: [
        "import React, { Component } from 'react';",
        "import { Text, View } from 'react-native';",
        "\nexport default class ${1:ComponentName} extends Component {",
        "\trender() {",
        "\t\treturn (",
        "\t\t\t<View>",
        "\t\t\t\t<Text>$0</Text>",
        "\t\t\t</View>",
        "\t\t);",
        "\t}",
        "}"
      ]
    },
    Import a exported variable: {
      prefix: "impvar",
      description: "Import a exported variable from a library",
      body: "import { $2 } from '$1';$0"
    },
    Import a
  default exported variable from absolute library: {
      prefix: "imp",
      description: "Import a default exported variable from a library",
      body: "import $1 from '$1';$0"
    },
    Import a
  default exported variable from a directory: {
      prefix: "impdir",
      description: "Import a default exported variable from a directory",
      body: "import $1 from './$1';$0"
    },
    Import a exported variable from a directory: {
      prefix: "impvardir",
      description: "Import a exported variable from a directory",
      body: "import { $2 } from './$1';$0"
    },
    Create an simple action: {
      prefix: "action",
      description: "Create an action, returning an object",
      body: [
        "export function ${1:actionName}(${2:parameter}) {",
        "\treturn {",
        "\t\ttype: $3,",
        "\t\tpayload: $4",
        "\t};",
        "}"
      ]
    },
    Create an thunk action: {
      prefix: "thunk",
      description: "Create a thunk action, returning a function",
      body: [
        "import { $2 } from './types';",
        "\nexport const $1 = () => {",
        "\treturn (dispatch) => {",
        "\t\tdispatch({",
        "\t\t\tpayload: $0,",
        "\t\t\ttype: $2,",
        "\t\t});",
        "\t};",
        "};"
      ]
    },
    Create a reducer: {
      prefix: "reducer",
      description: "Create a simple reducer",
      body: [
        "const INITIAL_STATE = {};",
        "\nexport default (state = INITIAL_STATE, action) => {",
        "\tswitch (action.type) {",
        "\t\tcase ${1:action.type}:",
        "\t\t\treturn {",
        "\t\t\t\t...state,",
        "\t\t\t\t...action.payload",
        "\t\t\t};",
        "\t\tdefault:",
        "\t\t\treturn state;",
        "\t}",
        "};$0"
      ]
    },
    Create a duck: {
      prefix: "duck",
      description: "Create an entire redux flow, with ducks concept",
      body: [
        "// Actions",
        "const ${1:ActionName} = '${2:Resource}/$1';",
        "\n// Reducer",
        "export default function reducer(state = {}, action) {",
        "\tswitch (action.type) {",
        "\t\tcase $1:",
        "\t\t\treturn {",
        "\t\t\t\t...state,",
        "\t\t\t\t...action.payload",
        "\t\t\t};",
        "\t\tdefault: return state;",
        "\t}",
        "}",
        "\n// Action Creators",
        "export function ${3:ActionCreator}() {",
        "\t$0",
        "}"
      ]
    },
    ( DEPRECATED ) Lifecycle: ComponentWillMount: {
      prefix: "cwm",
      description: "ComponentWillMount Lifecycle",
      body: [
        "/**",
        "* Warning: This lifecycle is currently deprecated, and will be removed in React version 17+",
        "More details here: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
        "*/",
        "componentWillMount() {",
        "\t$0",
        "}"
      ]
    },
    Lifecycle: ComponentDidMount: {
      prefix: "cdm",
      description: "ComponentDidMount Lifecycle",
      body: [ "componentDidMount() {", "\t$0", "}" ]
    },
    ( DEPRECATED ) Lifecycle: ComponentWillUpdate: {
      prefix: "cwu",
      description: "ComponentWillUpdate Lifecycle",
      body: [
        "/**",
        "* Warning: This lifecycle is currently deprecated, and will be removed in React version 17+",
        "More details here: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
        "*/",
        "componentWillUpdate(nextProps, nextState) {",
        "\t$0",
        "}"
      ]
    },
    Lifecycle: ComponentDidUpdate: {
      prefix: "cdu",
      description: "ComponentDidUpdate Lifecycle",
      body: [
        "componentDidUpdate(prevProps, prevState, snapshot) {",
        "\t$0",
        "}"
      ]
    },
    ( DEPRECATED ) Lifecycle: ComponentWillReceiveProps: {
      prefix: "cwrp",
      description: "ComponentWillReceiveProps Lifecycle",
      body: [
        "/**",
        "* Warning: This lifecycle is currently deprecated, and will be removed in React version 17+",
        "More details here: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
        "*/",
        "componentWillReceiveProps(nextProps) {",
        "\t$0",
        "}"
      ]
    },
    Lifecycle: ComponentWillUnmount: {
      prefix: "cwun",
      description: "ComponentWillUnmount Lifecycle",
      body: [ "componentWillUnmount() {", "\t$0", "}" ]
    },
    Lifecycle: ShouldComponentUpdate: {
      prefix: "scu",
      description: "ShouldComponentUpdate Lifecycle",
      body: [ "shouldComponentUpdate(nextProps, nextState) {", "\t$0", "}" ]
    },
    PropType: {
      prefix: "prp",
      description: "PropType declaration",
      body: "PropTypes.$0"
    },
    Required PropType: {
      prefix: "prpr",
      description: "Required PropType declaration",
      body: "PropTypes.${1:type}.isRequired$0"
    },
    Map state to props: {
      prefix: "mstp",
      description: "A function that returns an object",
      body: "const mapStateToProps = ({ $1 }) => ({ $1 });$0"
    },
    Map dispatch to props: {
      prefix: "mdtp",
      description: "A variable that returns an object",
      body: "const mapDispatchToProps = { ${1:Action} };$0"
    },
    High order component: {
      prefix: "hoc",
      description: "Create a wrapper function which returns another component",
      body: [
        "import React, { Component } from 'react';",
        "\nfunction ${1:HighOrderFunction}(WrappedComponent) {",
        "\treturn class WrapperComponent extends Component {",
        "\t\t$0",
        "\t\trender() {",
        "\t\t\treturn <WrappedComponent {...this.props} />;",
        "\t\t}",
        "\t};",
        "}"
      ]
    },
    Lifecycle: getDerivedStateFromProps: {
      prefix: "gdsfp",
      description: "static getDerivedStateFromProps Lifecycle",
      body: [ "static getDerivedStateFromProps(props, state) {", "\t$0", "}" ]
    },
    Lifecycle: getSnapshotBeforeUpdate: {
      prefix: "gsbu",
      description: "getSnapshotBeforeUpdate Lifecycle. The value returned by this function will be passed as the third parameter into componentDidUpdate() Lifecycle",
      body: [ "getSnapshotBeforeUpdate(prevProps, prevState) {", "\t$0", "}" ]
    },
    useState 's hook creation: {
  prefix: "hookst",
    description: "The creation of useState's hook",
    body: "const [${1:value}, ${2:setValue}] = useState(${0:defaultValue});"
}
}
