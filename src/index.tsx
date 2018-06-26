import * as React from "react";
import * as ReactDOM from "react-dom";
import { Device } from "./device/device";
import { Editor } from "./components/editor";
import { Navigation } from "./components/navigation";

import "./index.css";
const ReactRouter = require("react-router-dom");
const { HashRouter: Router, Route } = ReactRouter;

const Json = require("./data/schema.json");

const Home = () => {
  return (
    <div>
      <Device />
    </div>
  );
};

const Format = () => {
  return <Editor onChange={() => {}} value={JSON.stringify(Json, null, 2)} />;
};

ReactDOM.render(
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/format" component={Format} />
      <Route path="/prototype" component={Format} />
    </div>
  </Router>,
  document.getElementById("container")
);
