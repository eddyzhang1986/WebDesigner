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
            <Link to="/">
              <span className="green">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/format">
              <span className="green">Format</span>
            </Link>
          </li>
          <li>
            <Link to="/prototype">
              <span className="green">Prototype</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
