import React from "react";

import {
  BackgroundColorContext,
  backgroundColors
} from "contexts/BackgroundColorContext";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";

var ps;

function FunctionInvoke(props) {
    console.log(props)
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="content" style={{marginTop: '-550px'}}>
        <Card className="card-chart">
        <CardHeader>
          <CardTitle style={{textAlign:'center'}} tag="h3">
            Invoke Function (Add button)
          </CardTitle>
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-triangle-right-17 text-primary" />{" "}
                    Request Body (Make this input)
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-atom text-primary" />{" "}
                    Response Status (Read Only)
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                    Round-trip (s) (If we can find it - Read Only)
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-wifi text-primary" />{" "}
                    Response Body (Read Only)
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default FunctionInvoke;
