import * as React from "react";
import * as ReactDOM from "react-dom";
import { Device } from "./device/device";
import { Editor } from "./components/editor";
import "./index.css";
const Json = require("./data/schema.json");

ReactDOM.render(
  <div>
    {" "}
    <div>
      <Device />
    </div>{" "}
    <div>
      <Editor onChange={() => {}} value={JSON.stringify(Json, null, 2)} />
    </div>
  </div>,
  document.getElementById("container")
);
