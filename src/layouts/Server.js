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
import { useState, useEffect, useRef } from "react";
import { Route, Switch, Redirect, useLocation, useParams } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbar/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FunctionInfoCard from "components/Function/FunctionInfoCard.js";
import FunctionInvoke from "../components/Function/FunctionInvoke";

import { serverInfo } from 'constants/servers.js'
import logo from "assets/img/react-logo.png";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import getFunctions from "../services/FunctionList";

var ps;

function Server(props) {
  const { id } = useParams()
  const server = serverInfo[id-1]
  const [functions, setFunctions] = useState([])
  const [selectedFunction, setSelectedFunction] = useState(null)
  const [refresh, setRefresh] = useState(false)

  const location = useLocation();
  const mainPanelRef = useRef(null);

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true
      });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  });
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //        //CALL FUNCTION LIST JS
  //     getFunctions(server.ip_address, server.username, server.password).then(res => {
  //     console.log("sa")
  //     setFunctions(res)
  //   })
  //   }, 5000)
  // }, [])

useEffect(() => {
      //CALL FUNCTION LIST JS
      getFunctions(server.ip_address, server.username, server.password).then(res => {
      setFunctions(res)
})
}, [])


  console.log(selectedFunction);

  const handleFunctionChange = (func) => {
    setSelectedFunction(func)
    setRefresh(!refresh)
  };

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
            <Sidebar
              functions={functions}
              logo={{
                outterLink: "https://www.creative-tim.com/",
                text: "Functions",
                imgSrc: logo
              }}
              onFunctionChange = {handleFunctionChange}
            />
            <div className="main-panel" ref={mainPanelRef} data={color}>
                <AdminNavbar/>
                {selectedFunction ? 
                <div className="main-panel-function">
                <FunctionInfoCard 
                name = {selectedFunction.name}
                ip_address = {server.ip_address}
                replicas = {selectedFunction.replicas}
                invocationCount = {selectedFunction.invocationCount}
                /> 
                <FunctionInvoke
                key = {selectedFunction.name}
                url = {'http://' + server.ip_address + ':8080/function/' + selectedFunction.name}
                disabled = {selectedFunction.replicas ? false : true}
                username = {server.username}
                password = {server.password}
                refresh = {refresh}
                />
                </div>
                : null
                }
                
              {
                // we don't want the Footer to be rendered on map page
                location.pathname === "/admin/maps" ? null : <Footer fluid />
              }
            </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Server;
