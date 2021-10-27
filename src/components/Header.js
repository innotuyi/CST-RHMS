import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="white"
      className="shadow-sm mb-5 bg-white rounded"
    >
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://registration.ur.ac.rw/partnership/sites/default/files/UR%20LOGO%20FOR%20REGISTRATION%20SITE.JPG"
      
          height="80px"
          object-fit="contain"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Nav.Link e href="">
            SignUp
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
