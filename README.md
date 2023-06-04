# Serverless Computing Model For Edge Applications

This is the repository of the senior project [Serverless Computing Model For Edge Applications](https://www.cmpe.boun.edu.tr/content/serverless-computing-model-edge-applications) in Bogazici University

## Project Details

Our project aims to implement a serverless computing framework for running serverless applications on the edge. There are many components of the projects which will be explained in following sections.

The dashboard we implemented provides users a simple interface which allows users to perform basic operations on the servers such as deploying a function, invoking a function and monitoring the server's CPU and memory usage.

We decided to use 3 servers to act as an edge server: 2 EC2 instances on the AWS with two different architectures, arm and amd. and 1 Raspberry pi as a true edge server.

Dashboard is deployed into another EC2 instance. How to setup and run the servers will be explained in the following sections.

Apart from this repository we also have a backend server in which we perform the function deploy operation via a shell script. [Here is the repository of the deployment server](https://github.com/Aliqaan/deploy-server)

To avoid CORS errors occurring in the dashboard we used the [Cors Anywhere](https://github.com/Rob--W/cors-anywhere) implementation.

## Components

* [Faasd](https://github.com/openfaas/faasd): Faasd is the serverless framework we chose to use in our project since it is designed and implemented without using Kubernetes which makes it a lightweight framework suitable for edge devices. 

* [Prometheus](https://github.com/prometheus/prometheus): Prometheus is a systems and service monitoring system. It collects metrics from configured targets at given intervals. Prometheus comes with the faasd installation however we could not manage to modify it according to our needs. Our solution will be reflected in the Setup section.

* [Node exporter](https://github.com/prometheus/node_exporter): Prometheus exporter for hardware and OS metrics. This is used in the edge servers to collect system metrics such as CPU and memory usage to be used in the monitoring part of the project.

* [ngrok](https://github.com/bubenshchykov/ngrok): ngrok allows us to make a port on a machine publicy available. ngrok is used in this project to expose the ports of faasd and node exporter in the raspberry pi.

* [Cors Anywhere](https://github.com/Rob--W/cors-anywhere): Publicly available proxy server to avoid CORS errors encountered on the dasboard.

* [Deploy-Server](https://github.com/Aliqaan/deploy-server): Backend server with the only purpose of deploying a function to an edge server. It takes the required parameters and execute a shell script to deploy function.

## Setup

Follow the below steps to setup and run the system.

### For edge servers:
* Install faasd using the installation options on the repository page.
* Install node exporter for metric collection.
* Install ngrok for port exposing. (Skip this if server is deployed on a Cloud Provider)

You can check if everything is working by sending a  curl request to port 8080 for faasd and port 9100 for node exporter. If ngrok is used send a request to the public url which is given after exposing the port via terminal.

### For dashboard server:
* Install faas-cli. Note that faasd installation is not required since we will only need to run terminal commands to deploy a function in this server not to host functions.
* Install node and npm for running the React and Node projects.
* Clone the [Dashboard](https://github.com/Aliqaan/serverless-dashboard) repository.
* Clone the [Deploy-Server](https://github.com/Aliqaan/deploy-server) repository.
* Clone the [Cors Anywhere](https://github.com/Rob--W/cors-anywhere) repository and change it's port to 3131. Or any other port of your choice. Do not forget to update the port from the dasboard if changed.
* Install pm2 using the command:
```shell
npm install pm2 -g
```
* Start Dashboard, Deploy-Server and Cors Anywhere applications using the pm2 start commands.


After the above steps you should be able to run this project locally or deploy to a server.





