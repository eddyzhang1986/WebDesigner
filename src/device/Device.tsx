import * as React from "react";
import { IPhone } from "./iphone/iphone";
import { Grid, Row, Col } from "react-bootstrap";
import { Editor } from "../components/editor";
import F from "react-jsonschema-form";

const Form: any = F;

const schema = require("../data/form.json");
const home: any = require("../data/home.json");

const REQUIRED_FIELD_SYMBOL = "*";

const CustomTitleField = (props: any) => {
  const { id, title, required, show, onClick } = props;
  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return (
    <legend id={id} onClick={onClick} style={{ cursor: "pointer" }}>
      {legend}
      {show ? "-" : "+"}
    </legend>
  );
};

class ObjectFieldTemplate extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const props: any = this.props;
    const { TitleField, DescriptionField } = props;

    return (
      <fieldset>
        {(props.uiSchema["ui:title"] || props.title) && (
          <TitleField
            show={this.state.show}
            onClick={(e: any) => {
              if (this.state.show) {
                this.setState({ show: false });
              } else {
                this.setState({ show: true });
              }
            }}
            id={`${props.idSchema.$id}__title`}
            title={props.title || props.uiSchema["ui:title"]}
            required={props.required}
            formContext={props.formContext}
          />
        )}
        <div style={{ display: this.state.show ? "block" : "none" }}>
          {props.description && (
            <DescriptionField
              id={`${props.idSchema.$id}__description`}
              description={props.description}
              formContext={props.formContext}
            />
          )}
          {props.properties.map((prop: any) => prop.content)}
        </div>
      </fieldset>
    );
  }
}

export class Device extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { formData: home };
  }
  render() {
    const fields = {
      TitleField: CustomTitleField
    };
    return (
      <Grid>
        <Row>
          <Col md={12} xs={12} sm={12}>
            <div
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#53d9ef"
              }}
            >
              <Editor
                onChange={() => {}}
                value={JSON.stringify(this.state.formData, null, 2)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} sm={12}>
            &nbsp;
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={4} sm={4}>
            <IPhone>
              <img width={320} src={require("../../resources/homepage.jpg")} />
            </IPhone>
          </Col>
          <Col md={8} xs={8} sm={8}>
            <Form
              fields={fields}
              ObjectFieldTemplate={ObjectFieldTemplate}
              schema={schema}
              formData={this.state.formData}
              onChange={(e: any) => {
                console.log(e);
                this.setState({ formData: e.formData });
              }}
            >
              &nbsp;
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
