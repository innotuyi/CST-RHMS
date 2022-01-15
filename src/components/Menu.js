import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import capture from "./Capture.PNG";
function Menu() {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <Navbar expand="lg" className="pt-2 pb-2 mt-2 mb-2">
      <Image src={capture} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown
            title={<span className="text-primary">{localStorage.getItem("email")}</span>}
            id="basic-nav-dropdown"
            className=""
          >
            <NavDropdown.Item>
              <Link to="/Dasboard" className="text-primary">
                View
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="text-primary" onClick={handleLogout}>
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Menu;
