import * as React from "react";
import * as ReactDOM from "react-dom";
import { Device } from "./device/device";
import { Editor } from "./components/editor";
import "./index.css";
const ReactRouter = require("react-router-dom");
const { HashRouter: Router, Route, Link } = ReactRouter;

const Json = require("./data/schema.json");

const Home = () => {
  return <Device />;
};

const Format = () => {
  return <Editor onChange={() => {}} value={JSON.stringify(Json, null, 2)} />;
};

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/format" component={Format} />
    </div>
  </Router>,
  document.getElementById("container")
);
