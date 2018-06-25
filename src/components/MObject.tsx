import * as React from "react";

const data = require("../data/schema.json");

export class MObject extends React.Component {
  render() {
      return <div>{data.xType}</div>;
  }
}
