import React from "react";
import { useState, useEffect } from 'react';

import {
  BackgroundColorContext,
} from "contexts/BackgroundColorContext";
import CodeEditor from '@uiw/react-textarea-code-editor';
import deployFunction from "services/FunctionDeploy";

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

function FunctionDeploy(props) {
    const [functionName, setFunctionName] = useState(null);
    const [code, setCode] = useState(
        `def handle(req):\n    """handle a request to the function\n    Args:\n    req (str): request body\n    """\n    return req`
      );
    const [refresh, setRefresh] = useState(false)
    const [deploying, setDeploying] = useState(false)

    const handleDeployButtonClick = () => {
        setDeploying(true)
        console.log(functionName.trim())
        console.log(code)
        const architecture = props.type === 'Edge' ? "linux/arm/7" : props.architecture === 'Arm' ? 'linux/arm64' : 'linux/amd64'
        deployFunction(props.gateway, props.password, functionName, code, architecture).then(res => {
          setRefresh(true)
          setDeploying(false)
        })
      };

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="content">
            <Card className="card-chart">
      <CardHeader>
        <CardTitle style={{ textAlign: 'center' }} tag="h3">
          Deploy Function
        </CardTitle>
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">
                  <i className="text-primary" />{' '}
                  Function Name
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Input
                  type="text"
                  placeholder="Function Name"
                  value={functionName}
                  onChange={(e) => setFunctionName(e.target.value)}
                />
              </CardBody>
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
                  <i className="text-primary" /> Code
                </CardTitle>
                <CardBody>
                <CodeEditor
                    value={code}
                    language="py"
                    placeholder="Please write your python code"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        height: "45vh", 
                        width: "100%",
                        fontSize: 14,
                        backgroundColor: "#1d1d27",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                    />
                    <Button color="primary" disabled={!functionName || functionName.match(/^ *$/) || deploying}  onClick={handleDeployButtonClick}>
                    {deploying ? 'Deploying' : 'Deploy'}
                    </Button>
                </CardBody>
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

export default FunctionDeploy;
