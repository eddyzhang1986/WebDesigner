import * as React from "react";
import { IPhone } from "./iphone/iphone";

export class Device extends React.Component {
  render() {
    return (
      <IPhone>
        <img width={320} src={require("../../resources/homepage.jpg")} />
      </IPhone>
    );
  }
}
