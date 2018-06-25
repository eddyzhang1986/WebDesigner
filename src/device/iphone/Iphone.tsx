import * as React from "react";
import "./iphone.css";

export class IPhone extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <a className="iPhoneLight">
        <div className="iPhone">
          <div className="iPhoneContent">{children}</div>
        </div>
      </a>
    );
  }
}
