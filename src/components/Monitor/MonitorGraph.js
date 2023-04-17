import React from "react";
import { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";

import { generateChartConfig } from "variables/charts.js";

import getMetrics from "services/GetMetrics";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Col,
    Row
  } from "reactstrap";

var ps;



function MonitorGraph(props) {

      
    const [data, setData] = useState([]);
    const q = 'node_memory_MemFree_bytes'

    useEffect(() => {
    getMetrics(props.url).then(res => {
        setData(res.data)
    })
    }, []);

  return (
    <>
      <div className="content">
        {data.result &&
        <Row>  
        <Col lg="12">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h3">
                <i className="tim-icons icon-send text-success" /> Memory Usage
              </CardTitle>
            </CardHeader>
            <CardBody>
                <div className="chart-area">
                    <Line
                        data={generateChartConfig(data.result[0].values.map(value => value[0]), data.result[0].values.map(value => value[1])).data}
                        options={generateChartConfig(data.result[0].values.map(value => value[0]), data.result[0].values.map(value => value[1])).options}
                    />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
        }

        {/* <Row>  
          <Col lg="12">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>  
          <Col lg="12">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default MonitorGraph;
