import * as React from "react";
import { IPhone } from "./iphone/iphone";
import Form from "react-jsonschema-form";
import { Grid, Row, Col } from "react-bootstrap";

const schema = require("../data/form.json");

export class Device extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} xs={6} sm={6}>
            <IPhone>
              <img width={320} src={require("../../resources/homepage.jpg")} />
            </IPhone>
          </Col>
          <Col md={6} xs={6} sm={6}>
            <Form schema={schema} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
