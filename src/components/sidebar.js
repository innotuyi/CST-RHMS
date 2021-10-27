import React from 'react'
import {Row, Col,Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Sidebar() {
    return (
             <Col md={3}>
            <div className="sidebar"> 
            <ul>
                <li><Link to="/Dash">Research</Link></li>
                <li><Link to="/Mentorship">Mentorship</Link></li>
                <li><Link to="/Community">Community Engement</Link></li>
                <li><Link to="/Chapter">Chapter</Link></li>
                <li><Link to="/Journal">Journal</Link></li>
                <li><Link to="/Conference">Conference</Link></li>
                <li><Link to="/Book">Book</Link></li>
                <li><Link to="/Collabarator">Collaborators</Link></li>
                <li><Link to="/Peer">Peer</Link></li>
                <li><Link to="/Innovation">Innovation</Link></li>
            </ul>                                     
            </div> 
        </Col>          
    )
}

export default Sidebar
