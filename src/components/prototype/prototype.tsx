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
          <Row>
            <Row>
              {/* 轮播图片 */}
              <Col md={12} xs={12} sm={12}>
                <Carousel />
              </Col>
            </Row>
            <Row
              style={{
                position: "relative",
                top: "-200px"
              }}
            >
              <Col md={2} xs={2} sm={2}>
                &nbsp;
              </Col>
              <Col md={8} xs={8} sm={8}>
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
              <Col md={2} xs={2} sm={2}>
                &nbsp;
              </Col>
            </Row>
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
            minHeight: "386px",
            borderWidth: "0px",
            backgroundColor: "#FDC7D5"
          }}
        >
          <Row>
            <Col
              md={12}
              xs={12}
              sm={12}
              style={{
                height: "45px",
                backgroundImage: `url(${require("../../../resources/images/t1.png")})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "320px 29px",
                MozBackgroundSize: "320px 29px"
              }}
            />
          </Row>
          <Row>
            <Col md={12} xs={12} sm={12}>
              <Col
                md={6}
                xs={6}
                sm={6}
                style={{
                  height: "64px",
                  backgroundImage: `url(${require("../../../resources/images/c1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "141px 64px",
                  MozBackgroundSize: "141px 64px"
                }}
              />
              <Col
                md={6}
                xs={6}
                sm={6}
                style={{
                  height: "64px",
                  backgroundImage: `url(${require("../../../resources/images/c2.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "141px 64px",
                  MozBackgroundSize: "141px 64px"
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              md={12}
              xs={12}
              sm={12}
              style={{ paddingLeft: "25px", paddingRight: "25px" }}
            >
              <Col
                md={3}
                xs={3}
                sm={3}
                style={{
                  height: "87px",
                  marginTop: "8px",
                  backgroundImage: `url(${require("../../../resources/images/g1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "72px 87px",
                  MozBackgroundSize: "72px 87px"
                }}
              />
              <Col
                md={3}
                xs={3}
                sm={3}
                style={{
                  height: "87px",
                  marginTop: "8px",
                  backgroundImage: `url(${require("../../../resources/images/g1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "72px 87px",
                  MozBackgroundSize: "72px 87px"
                }}
              />{" "}
              <Col
                md={3}
                xs={3}
                sm={3}
                style={{
                  height: "87px",
                  marginTop: "8px",
                  backgroundImage: `url(${require("../../../resources/images/g1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "72px 87px",
                  MozBackgroundSize: "72px 87px"
                }}
              />{" "}
              <Col
                md={3}
                xs={3}
                sm={3}
                style={{
                  height: "87px",
                  marginTop: "8px",
                  backgroundImage: `url(${require("../../../resources/images/g1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "72px 87px",
                  MozBackgroundSize: "72px 87px"
                }}
              />{" "}
              <Col
                md={3}
                xs={3}
                sm={3}
                style={{
                  height: "87px",
                  marginTop: "8px",
                  backgroundImage: `url(${require("../../../resources/images/g1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "72px 87px",
                  MozBackgroundSize: "72px 87px"
                }}
              />{" "}
              <Col
                md={3}
                xs={3}
                sm={3}
                style={{
                  height: "87px",
                  marginTop: "8px",
                  backgroundImage: `url(${require("../../../resources/images/g1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "72px 87px",
                  MozBackgroundSize: "72px 87px"
                }}
              />{" "}
              <Col
                md={3}
                xs={3}
                sm={3}
                style={{
                  height: "87px",
                  marginTop: "8px",
                  backgroundImage: `url(${require("../../../resources/images/g1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "72px 87px",
                  MozBackgroundSize: "72px 87px"
                }}
              />{" "}
              <Col
                md={3}
                xs={3}
                sm={3}
                style={{
                  height: "87px",
                  marginTop: "8px",
                  backgroundImage: `url(${require("../../../resources/images/g1.png")})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "72px 87px",
                  MozBackgroundSize: "72px 87px"
                }}
              />
            </Col>
          </Row>
        </Row>
        {/* 其他分类 */}
        <Row />
      </Grid>
    );
  }
}
