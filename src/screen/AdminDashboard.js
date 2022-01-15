import React from "react";
import { Row, Col, Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* <HeaderDashborad/> */}
      <Col md={3}>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/MentorshipAdmin">Mentorship</Link>
            </li>
            <li>
              <Link to="/CommunityAdmin">Community</Link>
            </li>
            <li>
              <NavDropdown
                title={
                  <span
                    className="text-light"
                    style={{
                      fontSize: "15px",
                      margin: "-18px",
                      paddingRight: "20px",
                    }}
                  >
                    Research Base
                  </span>
                }
                id="basic-nav-dropdown"
                className=""
              >
                <NavDropdown.Item>
                  <Link to="/BookBasedAdmin" className="text-primary">
                    Book Based
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="text-primary">
                  <Link to="/ChapterAdmin" className="text-primary">
                    Chapter Based
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="text-primary">
                  <Link to="/ConferenceBasedAdmin" className="text-primary">
                    Conference Based
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="text-primary">
                  <Link to="/JournalBasedAdmin" className="text-primary">
                    Journal Based
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>

            {/* <li>
            <NavDropdown title={<span className="text-light"
            style={{fontSize:"15px",margin:"-18px",paddingRight:"20px" }}>Research Profile</span>} id="basic-nav-dropdown" 
            className="">
                  <NavDropdown.Item><Link to="/JournalAdmin" className="text-primary">Journal article</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-primary" href="/">Conference</NavDropdown.Item>
            </NavDropdown>
            </li> */}

            <li>
              <NavDropdown
                title={
                  <span
                    className="text-light"
                    style={{
                      fontSize: "15px",
                      margin: "-18px",
                      paddingRight: "20px",
                    }}
                  >
                    Manage staff
                  </span>
                }
                id="basic-nav-dropdown"
                className=""
              >
                <NavDropdown.Item>
                  <Link to="/ReasearchAdmin" className="text-primary">
                    Project conducted
                  </Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item className="text-primary" href="/">Mentorship</NavDropdown.Item> */}
              </NavDropdown>
            </li>

            {/* <li>
            <NavDropdown title={<span className="text-light"
            style={{fontSize:"15px",margin:"-18px",paddingRight:"18px",paddingLeft:"10px" }}>Activities</span>} id="basic-nav-dropdown" 
            className="">
                  <NavDropdown.Item><Link to="/Dasboard" className="text-primary">Module Taught</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-primary" href="/">Higher Learning</NavDropdown.Item>
                  <NavDropdown.Item className="text-primary" href="/">Portfolio</NavDropdown.Item>
            </NavDropdown>
            </li> */}
          </ul>
        </div>
      </Col>
    </>
  );
}

export default Sidebar;
