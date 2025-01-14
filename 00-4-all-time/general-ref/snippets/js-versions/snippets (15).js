{
  Import React: {
    prefix: "imr",
    body: ["import React from 'react';"],
    description: "Import React"
  },

  Import React, { Component }: {
    prefix: "imrc",
    body: ["import React, { Component } from 'react';"],
    description: "Import React, { Component }"
  },

  Import React, { useState }: {
    prefix: "imrs",
    body: [
      "import React, { useState } from 'react';"
    ],
    description: "Import React, { useState }"
  },

  Import React, { useState, useEffect }: {
    prefix: "imrse",
    body: [
      "import React, { useState, useEffect } from 'react';"
    ],
    description: "Import React, { useState, useEffect }"
  },

  Import PropTypes: {
    prefix: "impt",
    body: ["import PropTypes from 'prop-types';"],
    description: "Import PropTypes"
  },

  Import Pure Component: {
    prefix: "impc",
    body: ["import React, { PureComponent } from 'react';"],
    description: "Import React, { PureComponent }"
  },

  Class Component: {
    prefix: "cc",
    body: [
      "class $1 extends Component {",
      "\tstate = { $2 }",
      "\trender() { ",
      "\t\treturn ( $0 );",
      "\t}",
      "}",
      " ",
      "export default $1;"
    ],
    description: "Class Component"
  },

  Class Pure Component: {
    prefix: "cpc",
    body: [
      "class $1 extends PureComponent {",
      "\tstate = { $2 }",
      "\trender() { ",
      "\t\treturn ( $0 );",
      "\t}",
      "}",
      " ",
      "export default $1;"
    ],
    description: "Class Pure Component"
  },

  Class Component With Constructor: {
    prefix: "ccc",
    body: [
      "class $1 extends Component {",
      "\tconstructor(props) {",
      "\t\tsuper(props);",
      "\t\tthis.state = { $2 }",
      "\t}",
      "\trender() { ",
      "\t\treturn ( $0 );",
      "\t}",
      "}",
      " ",
      "export default $1;"
    ],
    description: "Class Component With Constructor"
  },

  Stateless Function Component: {
    prefix: "sfc",
    body: [
      "const $1 = ($2) => {",
      "\treturn ( $0 );",
      "}",
      " ",
      "export default $1;"
    ],
    description: "Stateless Function Component"
  },

  componentDidMount: {
    prefix: "cdm",
    body: ["componentDidMount() {", "\t$0", "}"],
    description: "componentDidMount"
  },

  useEffect: {
    prefix: "uef",
    body: [
      "useEffect(() => {",
      "\t$1",
      "}, []);"
    ],
    description: "useEffect Hook"
  },

  componentWillMount: {
    prefix: "cwm",
    body: ["//WARNING! To be deprecated in React v17. Use componentDidMount instead.", "componentWillMount() {", "\t$0", "}"],
    description: "componentWillMount"
  },

  componentWillReceiveProps: {
    prefix: "cwrp",
    body: ["//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.", "componentWillReceiveProps(nextProps) {", "\t$0", "}"],
    description: "componentWillReceiveProps"
  },

  getDerivedStateFromProps: {
    prefix: "gds",
    body: ["static getDerivedStateFromProps(nextProps, prevState) {", "\t$0", "}"],
    description: "getDerivedStateFromProps"
  },

  shouldComponentUpdate: {
    prefix: "scu",
    body: ["shouldComponentUpdate(nextProps, nextState) {", "\t$0", "}"],
    description: "shouldComponentUpdate"
  },

  componentWillUpdate: {
    prefix: "cwu",
    body: ["//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.", "componentWillUpdate(nextProps, nextState) {", "\t$0", "}"],
    description: "componentWillUpdate"
  },

  componentDidUpdate: {
    prefix: "cdu",
    body: ["componentDidUpdate(prevProps, prevState) {", "\t$0", "}"],
    description: "componentDidUpdate"
  },

  componentWillUnmount: {
    prefix: "cwun",
    body: ["componentWillUnmount() {", "\t$0", "}"],
    description: "componentWillUnmount"
  },

  componentDidCatch: {
    prefix: "cdc",
    body: ["componentDidCatch(error, info) {", "\t$0", "}"],
    description: "componentDidCatch"
  },

  getSnapshotBeforeUpdate: {
    prefix: "gsbu",
    body: ["getSnapshotBeforeUpdate(prevProps, prevState) {", "\t$0", "}"],
    description: "getSnapshotBeforeUpdate"
  },

  setState: {
    prefix: "ss",
    body: ["this.setState({ $1: $2 });"],
    description: "setState"
  },

  Functional setState: {
    prefix: "ssf",
    body: ["this.setState(prevState => {", "\treturn { $1: prevState.$1 };", "});"],
    description: "Functional setState"
  },

  Declare a new state variable using State Hook: {
    prefix: "usf",
    body: ["const [${1}, set${1/(.*)/${1:/capitalize}/}] = useState($2);"],
    description: "Declare a new state Variable using the State Hook. Hit Tab to apply CamelCase to function"
  },

  render: {
    prefix: "ren",
    body: ["render() {", "\treturn (", "\t\t $0", "\t);", "}"],
    description: "render"
  },

  Render Prop: {
    prefix: "rprop",
    body: [
      "class $1 extends Component {",
      "\tstate = { $2: $3 }",
      "\trender() { ",
      "\t\treturn this.props.render({",
      "\t\t\t$2: this.state.$2",
      "\t\t});",
      "\t}",
      "}",
      " ",
      "export default $1;"
    ],
    description: "Render Prop"
  },

  Higher Order Component: {
    prefix: "hoc",
    body: [
      "function $1($2) {",
      "\treturn class extends Component {",
      "\t\tconstructor(props) {",
      "\t\t\tsuper(props);",
      "\t\t}",
      " ",
      "\t\trender() {",
      "\t\t\treturn <$2 {...this.props} $0/>",
      "\t\t}",
      "\t}",
      "}"
    ],
    description: "Higher Order Component"
  }
}
