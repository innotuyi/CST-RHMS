import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Button, Table, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Menu from "../components/Menu";
let token = localStorage.getItem("token");

const SingleMentorhip = () => {

    const [researches, setResearches] = useState([]);

    console.log(localStorage.getItem("token"));
    //let token = localStorage.token;
  
    const { id } = useParams();
  
    useEffect(() => {
      async function fetchProducts() {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/researches/mentorship/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setResearches(data);
      }
      fetchProducts();
    }, []);




    return (
        <div>
          <Menu />
          <hr />
          <Row>
            <Sidebar />
    
            <Col md={8}>
              <div className="text-right m-3">
                <h4 className="table-header text-left">Mentorship In detail</h4>
                <Button className="btn-primary text-right add-btn">
                  <Link to="/Mentorship" className="text-light">
                    Back
                  </Link>
                </Button>
              </div>
              <Card>
                <Card.Body>
                  <Card.Text>
                    {" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        padding: "0.5rem",
                      }}
                    >
                Student Name
                    </span>
                    {researches.staff_or_student_mentored}
                  </Card.Text>
                  <Card.Text>
                    <span
                      style={{
                        fontWeight: "bold",
                        padding: "0.5rem",
                      }}
                    >
                     level:
                    </span>
    
                    {researches.level}
                  </Card.Text>
                  <Card.Text>
                    <span
                      style={{
                        fontWeight: "bold",
                        padding: "0.5rem",
                      }}
                    >
                      Project Title:
                    </span>
    
                    {researches.studentsprojectTitle}
                  </Card.Text>
                  <Card.Text>
                    <span
                      style={{
                        fontWeight: "bold",
                        padding: "0.5rem",
                      }}
                    >
                      University:
                    </span>
    
                    {researches.university}
                  </Card.Text>
                  <Card.Text>
                    <span
                      style={{
                        fontWeight: "bold",
                        padding: "0.5rem",
                      }}
                    >
                      School Name:
                    </span>
    
                    {researches.school_name}
                  </Card.Text>
                  <Card.Text>
                    <span
                      style={{
                        fontWeight: "bold",
                        padding: "0.5rem",
                      }}
                    >
                      Department Name:
                    </span>
    
                    {researches.departement}
                  </Card.Text>
                  <Card.Text>
                    <span
                      style={{
                        fontWeight: "bold",
                        padding: "0.5rem",
                      }}
                    >
                      Comment:
                    </span>
    
                    {researches.comment}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      );
}

export default SingleMentorhip
