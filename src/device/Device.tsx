import * as React from "react";
import { IPhone } from "./iphone/iphone";
import Form from "react-jsonschema-form";
import { Grid, Row, Col } from "react-bootstrap";
import { Editor } from "../components/editor";

const schema = require("../data/form.json");
const home = require("../data/home.json");

export class Device extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={4} xs={4} sm={4}>
            <IPhone>
              <img width={320} src={require("../../resources/homepage.jpg")} />
            </IPhone>
          </Col>
          <Col md={8} xs={8} sm={8}>
            <Form schema={schema} />
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} sm={12}>
            <Editor onChange={() => {}} value={JSON.stringify(home, null, 2)} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
