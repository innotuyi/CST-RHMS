import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import svg from "../images/Lecturesvg.svg";
import Menu from "./Menu";

import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Jumbotron,
  Image,
} from "react-bootstrap";
let token = localStorage.getItem("token");

function Mentoship() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [title, setTitle] = useState("");
  const [university, setUniversity] = useState("");
  const [school, setSchool] = useState("");
  const [depart, setDepart] = useState("");

  const mentoHandler = (e) => {
    e.preventDefault();
    const payload = {
      staff_or_student_mentored: name,
      level: level,
      studentsprojectTitle: title,
      university:university,
      school_name:school,
      departement:depart

    };

    axios
      .post("http://127.0.0.1:8000/researches/mentorship/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/Mentorship");
      })
      .catch(function (error) {
        console.log("Error response: ", error);
      });
  };
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(to bottom, white, 84%, #1089AF)",
        }}
      >
        <Menu />
        <Container>
          <Row className="d-flex justify-content-center arighn-item-center">
            <Col className="leftimage">
              <Image
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                  paddingTop: "80px",
                }}
                src={svg}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <Jumbotron
                style={{
                  background:
                    "linear-gradient(to bottom, white , 90%, #1089AF )",
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <Form className="form" style={{}} onSubmit={mentoHandler}>
                  <h2 className="text-center mb-5 text-secondary">
                    Add A Suppervised Mentoship
                  </h2>
                  <Form.Group>
                    <Form.Label>Enter Student's Name</Form.Label>
                    <Form.Control
                      required
                      type="Text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Student's Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="">
                    <Form.Label>Level Name</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      id="level"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                    >
                      <option>Select Level</option>
                      <option>Masters</option>
                      <option>Bacheros</option>
                      <option>PhD</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Enter The Project Title</Form.Label>
                    <Form.Control
                      required
                      type="Text"
                      placeholder="Enter The Project Title"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Enter The Student's University</Form.Label>
                    <Form.Control
                      required
                      type="Text"
                      placeholder="Enter The Student's University"
                      id="university"
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group controlId="">
                        <Form.Label>School Name</Form.Label>
                        <Form.Control
                          as="select"
                          required
                          id="school"
                          value={school}
                          onChange={(e) => setSchool(e.target.value)}
                        >
                          <option>Select school</option>
                          <option>
                            School of Information and Communication
                            Technology-SOICT
                          </option>
                          <option>
                            School of Architecture and the Built Environment -
                            SABE
                          </option>
                          <option>School of Engineering-SOE</option>
                          <option>School of Mining and Geology-SMG</option>
                          <option>School of Science-SOS</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group controlId="">
                      <Form.Label>Department Name</Form.Label>
                      <Form.Control
                        as="select"
                        required
                        id="depart"
                        value={depart}
                        onChange={(e) => setDepart(e.target.value)}
                      >
                        <option>Select Department</option>
                        <option>Departement of Computer Science</option>
                        <option>Departement of Information System</option>
                        <option>Departement of Information Technology</option>
                        <option>Department of Architecture</option>
                        <option>Department of Construction Management</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  </Row>
                  <Col className="text-center">
                    <Button className="" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Mentoship;
