/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import { serverInfo } from 'constants/servers.js'

function Dashboard(props) {
  const history = useHistory();

  const handleServerClick = (id) => {
    // Redirect to the related server
    history.push(`/server/${id}`);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <h1 style={{textAlign:'center'}}>Serverless Dashboard</h1>
          </Col>
        </Row>
        <Row>
            {serverInfo.map(server => (
              <Col lg="6">
                <Card className="card-chart" style={{cursor:"pointer"}} onClick = {() => {handleServerClick(server.id)}}>
                  <CardHeader>
                    <CardTitle style={{textAlign:'center'}} tag="h3">
                      Server {server.id}
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                  <Row>
                    <Col xs="12">
                      <h4 style={{textAlign:'center'}}>Server Information</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h3">
                            <i className="tim-icons icon-laptop text-primary" />{" "}
                            Architecture: {server.architecture}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h3">
                            <i className="tim-icons icon-triangle-right-17 text-primary" />{" "}
                            State: {server.state}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h3">
                            <i className="tim-icons icon-app text-primary" />{" "}
                            Type: {server.type}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </Col>
                    <Col lg="12">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h3">
                            <i className="tim-icons icon-wifi text-primary" />{" "}
                            Url: {'http://' + server.ip_address + ':8080'}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </Col>
                  </Row>
                  </CardBody>
                </Card>
              </Col>
              ))
            }          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
