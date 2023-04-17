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
/*eslint-disable*/
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import {
  BackgroundColorContext,
  backgroundColors
} from "contexts/BackgroundColorContext";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);
  const [selectedFunction, setSelectedFunction] = React.useState({})
  const [showMonitoring, setShowMonitoring] = React.useState(false)
  const [showDeploy, setShowDeploy] = React.useState(false)

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  
  const handleFunctionClick = (func) => {
    setSelectedFunction(func)
    setShowMonitoring(false)
    setShowDeploy(false)
    console.log(props)
    onFunctionChange(func, false, false)
  };
  const handleMonitorClick = () => {
    setSelectedFunction({})
    setShowMonitoring(true)
    setShowDeploy(false)
    onFunctionChange(null, true, false)
  };
  const handleDeployClick = () => {
    setSelectedFunction([])
    setShowMonitoring(false)
    setShowDeploy(true)
    onFunctionChange(null, false, true)
  };

  const { functions, logo, onFunctionChange} = props;
  let logoText = (
    <a className="simple-text logo-normal" >
      {logo.text}
    </a>
  );
  
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
              <div className="logo" style={{textAlign:'center'}}>
                {logoText}
              </div>
            <Nav>
              {functions.map((func) => {
                // console.log(func)
                return (
                    <div
                      className="rounded-nav"
                      style={{margin: '10px 15px 0', border: selectedFunction.name === func.name ? '2px solid #f3caf0' : '', cursor:'pointer'}}
                      onClick= {() => {handleFunctionClick(func)}}
                    >
                      <i className="tim-icons icon-spaceship" />
                      <p>{func.name}</p>
                    </div>
                );
              })}
              <li className="active-pro">
                <div 
                className="rounded-nav" 
                style={{margin: '10px 15px 55px' ,border: showMonitoring ? '2px solid #f3caf0' : '', cursor:'pointer'}}
                onClick= {handleMonitorClick}
                >
                    <i className="tim-icons icon-chart-bar-32" />
                    <p>Monitor</p>
                </div>
              </li>
              <li className="active-pro">
                 <div
                  className="rounded-nav"
                  style={{margin: '10px 15px 0px', border: showDeploy ? '2px solid #f3caf0' : '', cursor:'pointer'}}
                  onClick = {handleDeployClick}
                  >
                      <i className="tim-icons icon-upload" />
                      <p>Deploy</p>
                    </div>
              </li>
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  rtlActive: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string
  })
};

export default Sidebar;
