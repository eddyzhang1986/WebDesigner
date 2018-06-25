import * as React from "react";
import "./iphone/iphone.css";

export class Device extends React.Component {
  render() {
    return (
      <div className="c-view">
        <p className="green">Home Page Settings</p>
        <a className="demo-li">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205320970list-products.gif" />
          </div>
        </a>
      </div>
    );
  }
}
