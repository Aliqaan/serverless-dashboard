import React from "react";
import { useState, useEffect } from 'react';

import {
  BackgroundColorContext,
} from "contexts/BackgroundColorContext";

import invokeFunction from "services/FunctionInvoke";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    Button,
    Input
  } from "reactstrap";

function FunctionInvoke(props) {

  const [requestBody, setRequestBody] = useState('');
  const [requestResponse, setRequestResponse] = useState(null)
  const [requestTripTime, setRequestTripTime] = useState(null)
  const [requestStatus, setRequestStatus] = useState(null)

  useEffect(() => {
    setRequestBody('')
    setRequestResponse(null)
    setRequestTripTime(null)
    setRequestStatus(null)
}, [props.refresh])

  const handleInvokeButtonClick = () => {
    const start = window.performance.now();
    invokeFunction(props.url, props.username, props.password, requestBody).then(res => {
      const end = window.performance.now();
      const roundTripTime = (end - start) / 1000;
      setRequestTripTime(roundTripTime.toFixed(3))
      setRequestResponse(res.message)
      setRequestStatus(res.status)
    })
  };


  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="content" style={{marginTop: '-400px'}}>
            <Card className="card-chart">
      <CardHeader>
        <CardTitle style={{ textAlign: 'center' }} tag="h3">
          Invoke Function
        </CardTitle>
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-triangle-right-17 text-primary" />{' '}
                  Request Body
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Input
                  type="textarea"
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                />
                <Button color="primary" disabled={props.disabled} onClick={handleInvokeButtonClick}>
                  Invoke
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-atom text-primary" /> Response Status: {requestStatus}
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-primary" /> Round-trip (s): {requestTripTime}
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
                  <i className="tim-icons icon-wifi text-primary" /> Response Body
                </CardTitle>
                <Input
                  type="textarea"
                  style = {{height : '1000px'}}
                  disabled = {true}
                  value={requestResponse}
                />
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
