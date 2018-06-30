import * as React from "react";
import * as ReactDOM from "react-dom";
import { Device } from "./device/device";

import { Navi } from "./components/navi/navi";


import "./global.css";
import "./index.css";
const ReactRouter = require("react-router-dom");
const { HashRouter: Router, Route } = ReactRouter;

const Home = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <Device />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <Navi />
      <Route exact path="/" component={Home} />
      <Route path="/prototype" component={(props:any)=>{<img width={320} src={require("../resources/homepage.jpg")} />}} />
    </div>
  </Router>,
  document.getElementById("container")
);
