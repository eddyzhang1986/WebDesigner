import * as React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Carousel from "../carousel";

export class Prototype extends React.Component {
  render() {
    return (
      <Grid style={{ width: "320px" }}>
        {/* banner背景 */}
        <Row
          style={{
            backgroundImage: `url(${require("../../../resources/images/bannerbg.jpg")})`,
            height: "386px",
            backgroundSize: "100% 100%",
            MozBackgroundSize: "100% 100%"
          }}
        >
          {/* 轮播图片 */}
          <Row
            style={{
              backgroundImage: `url(${require("../../../resources/images/swiper.png")})`,
              height: "206px",
              backgroundSize: "100% 100%",
              MozBackgroundSize: "100% 100%",
              margin: "0px auto"
            }}
          >
            <Row>
              <Col md={12} xs={12} sm={12}>
                <Carousel />
              </Col>
            </Row>
            <Col md={2} xs={2} sm={2} />
            {/* 文本框 */}
            <Col md={9} xs={9} sm={9}>
              <div
                style={{
                  width: "222px",
                  height: "25px",
                  backgroundImage: `url(${require("../../../resources/images/search.png")})`,
                  backgroundSize: "100% 100%",
                  MozBackgroundSize: "100% 100%"
                }}
              >
                &nbsp;
              </div>
            </Col>
            <Col md={1} xs={1} sm={1} />
          </Row>
          {/* 功能按钮 */}
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
          {/* 店主升级 */}
          <Row>
            <Col md={12} xs={12} sm={12}>
              test
            </Col>
          </Row>
        </Row>
        {/* 分类直达 */}
        <Row
          style={{
            backgroundImage: `url(${require("../../../resources/images/bg1.jpg")})`,
            minHeight: "386px",
            borderWidth: "0px",
            backgroundColor: "#FDC7D5",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            MozBackgroundSize: "100% auto"
          }}
        />
        {/* 其他分类 */}
        <Row />
      </Grid>
    );
  }
}
