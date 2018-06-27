import * as React from "react";
import { Grid, Row, Col } from "react-bootstrap";

export class Prototype extends React.Component {
  render() {
    return (
      <Grid style={{ width: "320px" }}>
        <Row
          style={{
            backgroundImage: "url(../../../resources/images/bannerbg.jpg)",
            height: "386px",
            backgroundSize: "100% 100%",
            MozBackgroundSize: "100% 100%"
          }}
        >
          <Row style={{ height: "40px" }}>
            <Col md={12} xs={12} sm={12}>
              header
            </Col>
          </Row>
          <Row
            style={{
              backgroundImage: "url(../../../resources/images/swiper.png)",
              height: "206px",
              backgroundSize: "100% 100%",
              MozBackgroundSize: "100% 100%",
              margin: "0px auto"
            }}
          />
          <Row>
            <Col md={1} xs={1} sm={1} />
            <Col md={2} xs={2} sm={2}>
              <img
                src={require("../../../resources/images/ball1.png")}
                width={40}
              />
            </Col>
            <Col md={2} xs={2} sm={2} style={{ textAlign: "center" }}>
              <img
                src={require("../../../resources/images/ball2.png")}
                width={40}
              />
            </Col>
            <Col md={2} xs={2} sm={2} style={{ textAlign: "center" }}>
              <img
                src={require("../../../resources/images/ball3.png")}
                width={40}
              />
            </Col>
            <Col md={2} xs={2} sm={2} style={{ textAlign: "center" }}>
              <img
                src={require("../../../resources/images/ball4.png")}
                width={40}
              />
            </Col>
            <Col md={2} xs={2} sm={2} style={{ textAlign: "center" }}>
              <img
                src={require("../../../resources/images/ball5.png")}
                width={40}
              />
            </Col>
            <Col md={1} xs={1} sm={1} />
          </Row>
        </Row>
      </Grid>
    );
  }
}
