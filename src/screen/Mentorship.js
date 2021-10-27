import React from 'react'
import {Col,Button,Table, Row} from 'react-bootstrap'
import axios from 'axios'
import { Link} from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Menu from '../components/Menu'
import  { mentorshipData } from '../mentorship'
import Paginate from '../components/Paginate'
 function Mentorship() {
     return (

    <div>
      <Menu/>
      <hr/>
       <Row>
          <Sidebar/>
              <Col md={8}>      
              <div className="text-right m-3">
           <h4 className="table-header text-left">Recent Mentorships</h4>
               <Button className="btn-primary text-right add-btn"><Link to="/mentoship" className="text-light">Add new</Link></Button>
               </div>                                            
              <Table hover>
                  <thead>
                          <tr>
                            <th>#</th>
                            <th>Level</th>
                            <th>Project Title</th>
                            <th>University</th>
                            <th>Staff</th>
                          </tr>
                        </thead>
                            <tbody>
                            {mentorshipData.map((mentor) =>
                            <tr>
                              <td>{mentor.mentorship_id}</td>
                              <td>{mentor.level}</td>
                              <td>{mentor.project_title}</td>
                              <td>{mentor.universtity}</td>
                              <td>{mentor.staff_id}</td>
                            </tr>

                        )}
                       </tbody>
                      
                        </Table>  

                           <Paginate/>   
                        </Col>
                              </Row>

    </div>

                             
         
                              
     )
  }

                        export default Mentorship
