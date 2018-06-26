import * as React from "react";
const ReactRouter = require("react-router-dom");
const { Link } = ReactRouter;

export class Navigation extends React.Component {
  render() {
    const style = { style: { display: "inline" } };
    return (
      <div {...style}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/format">Format</Link>
          </li>
          <li>
            <Link to="/prototype">Prototype</Link>
          </li>
        </ul>
      </div>
    );
  }
}
