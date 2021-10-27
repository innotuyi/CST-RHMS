import React from 'react'
import HeaderDashborad from '../components/HeaderDashborad'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { FaUser, FaUserEdit } from "react-icons/fa";
import {Link } from "react-router-dom"
import {researchData} from '../research'
import Mentorship from './Mentorship'
import Community from './Community'
import Research from './Research'


import {staffData} from '../staff'
function Dashboard() {
    return (
        <div>
            <HeaderDashborad/>
            <hr/>
             <Container className="pb-5  mb-5">
                  <Row>
                      <Col md={4} col={12}>
                          <div className="profile">

                          <FaUser style={{
                      color:"#2293C2",
                      fontSize:"5rem"
                         }} className="text-center"/>
                    <h6 className="pt-4"><strong>Staff info</strong></h6>

                    {staffData.map((staff) =>
                    <h6><strong>{staff.firstname} {staff.lastname}</strong></h6>                                 
                     
                     )}              
                    
                  <h6><strong>Bsc in Information technology</strong></h6>
                    <h6>Tutorial assistant</h6>
                    <h6><strong>+250785530782</strong></h6>
                   <FaUserEdit style={{
                        fontSize:"3rem",
                        color:"#036F9D"
                    }}/>
                          </div>
                     
                    
                     </Col>

                     <Col md={8} col={12}>
                      <div className="right-sidebar">
                           <span className="dash-text"><strong>Overview</strong></span>
                       <h6 className="p-5"><strong>Here is the overview of your work</strong></h6>
                         <Row>
                             <Col md={4} col={12} className="">
                                 <Link to="/">
                                 <Card style={{ width: '12rem'
                                 }}>
                                    <Card.Header className="text-center" 
                                    style={{ background:"#005792",border:"none"}}  className="respo"><h5>Research</h5></Card.Header>
                                    <Card.Body>
                                        <h1 className="text-center">0</h1>
                                    </Card.Body>
                                    </Card> 
                                 </Link>
                          
                             </Col>
                             <Col md={4} col={12} className="">
                              <Link to="/Mentor">
                              <Card style={{ width: '12rem' }} className="respo">
                                    <Card.Header className="text-center" 
                                    style={{background:"#005792",border:"none"}}><h5>Mentorship</h5></Card.Header>
                                    <Card.Body>
                                        <h1 className="text-center">0</h1>
                                    </Card.Body>
                                    </Card> 
                              </Link>
                             </Col>
                       
                             <Col md={4} col={12}>
                                 <Link to='/Community'>
                                 <Card style={{ width: '12rem' }} className="respo">
                                    <Card.Header className="text-center" 
                                    style={{ background:"#005792",border:"none"}}><h5>Community</h5></Card.Header>
                                    <Card.Body>
                                        <h1 className="text-center">0</h1>
                                    </Card.Body>
                                    </Card> 
                                 
                                 </Link>
                        
                             </Col>                  
                        <Link>
                        <Col md={4} col={12} className="mt-2">
                                    <Card style={{ width: '12rem' }} className="respo">
                                    <Card.Header className="text-center" 
                                    style={{ background:"#005792",border:"none"}}><h5>Supervision</h5></Card.Header>
                                    <Card.Body>
                                        <h1 className="text-center">0</h1>
                                    </Card.Body>
                                    </Card> 
                             </Col>
                        </Link>
                        <Link>
                        <Col md={4} className="mt-2 ml-2">
                                    <Card style={{ width: '12rem' }} className="respo">
                                    <Card.Header className="text-center" 
                                    style={{ background:"#005792",border:"none"}}><h5>publication</h5></Card.Header>
                                    <Card.Body>
                                        <h1 className="text-center">0</h1>
                                    </Card.Body>
                                    </Card> 
                             </Col>
                        </Link>
                        <Link>
                        <Col md={4} className="mt-2 ml-2">
                                    <Card style={{ width: '12rem' }} className="respo">
                                    <Card.Header className="text-center" 
                                    style={{ background:"#005792",border:"none"}}><h5>Teaching</h5></Card.Header>
                                    <Card.Body>
                                        <h1 className="text-center">0</h1>
                                    </Card.Body>
                                    </Card> 
                             </Col>
                        </Link>
                        
                             
                         </Row>
                      </div>
                       
                                              
                     </Col>             
                 </Row>
               
             </Container>

        </div>
              
    )
}

export default Dashboard
