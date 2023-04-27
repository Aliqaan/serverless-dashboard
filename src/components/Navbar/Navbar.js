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
import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Navbar,
  Container,
  NavbarToggler,
} from "reactstrap";

function AdminNavbar(props) {
  const history = useHistory();
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };

  const handleButtonClick = () => {
    // Redirect to the home page
    
    history.push("/");
  };


  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} style={{position:'fixed'}} expand="lg">
            <div className="btn btn-round" style={{marginBottom:'100px'}} onClick={handleButtonClick}>
            <i className="tim-icons icon-double-left"/> Go Back
          </div>
      </Navbar>
    </>
  );
}

export default AdminNavbar;