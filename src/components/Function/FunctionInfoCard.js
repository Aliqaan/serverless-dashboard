import React from "react";

import {
  BackgroundColorContext,
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

function FunctionInfoCard(props) {
    //console.log(props)
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="content">
        <Card className="card-chart">
        <CardHeader>
          <CardTitle style={{textAlign:'center'}} tag="h3">
            {props.name}
          </CardTitle>
          <Row>
            <Col lg="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-triangle-right-17 text-primary" />{" "}
                    Status: {props.replicas ? 'Ready' : 'Not Ready'}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-atom text-primary" />{" "}
                    Replicas: {props.replicas}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                    Invocation Count: {props.invocationCount}
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
                    URL: {'http://' + props.ip_address + ':8080/function/' + props.name}
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

export default FunctionInfoCard;
