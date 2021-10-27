import React from 'react'
import capture from './Capture.PNG'
import {Link } from "react-router-dom"
import {Nav,Navbar,Image} from 'react-bootstrap';

                    const HeaderDashborad =() => {
                        return (
                            <Navbar expand="lg" className="pt-2 pb-2 mt-2 mb-2">
                            <Link to='/'> <Image src={capture}/></Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            <Nav.Link href="#home" className="text-primary">Dashboard</Nav.Link>
                            <Nav.Link href="#features" className="text-primary">Logout</Nav.Link>          
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        )
                    }
                    export default HeaderDashborad
