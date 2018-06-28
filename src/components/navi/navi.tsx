import * as React from "react";
const ReactRouter = require("react-router-dom");
const { Link } = ReactRouter;
import "./navi.css";

export class Navi extends React.Component {
  render() {
    const style = { style: { display: "inline" } };
    return (
      <div {...style} className="navi">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/prototype">Prototype</Link>
          </li>
        </ul>
      </div>
    );
  }
}
