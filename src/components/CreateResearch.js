import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "./Header";
import Menu from "./Menu";
let token = localStorage.getItem("token");

function CreateResearch() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [school, setSchool] = useState("");
  const [depart, setDepart] = useState("");
  const [type, setType] = useState("");
  // const [dateCreated, setDateCreated] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      research_title: title,
      funding_source: amount,
      starting_date: startDate,
      ending_date: endingDate,
      funding_amount: amount,
      status: status,
      school_name:school,
      departement:depart

    };

    axios
      .post("http://127.0.0.1:8000/researches/research-project/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/Dash");
      })
      .catch(function (error) {
        console.log("Error response: ", error);
      });
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, 84%, #1089AF)",
        height: "100vh",
      }}
    >
      <Menu />
      <Container>
        <Row className="d-flex justify-content-center arighn-item-center">
          <Col className="d-flex justify-content-center">
            <Jumbotron
              style={{
                background: "linear-gradient(to bottom, white , 90%, #1089AF )",
                borderRadius: "10px",
                width: "90%",
              }}
            >
              <Form className="form" style={{}} onSubmit={submitHandler}>
                <h2 className="text-center mb-5 text-secondary">
                  Create New Research
                </h2>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Research Title"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Finding Source</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="Enter funding source"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="dob">
                      <Form.Label>Select Starting Date</Form.Label>
                      <Form.Control
                        type="date"
                        // pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                        name="dos"
                        required
                        id="startdate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder="YYYY-MM-DD"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Select Ending Date</Form.Label>
                      <Form.Control
                        type="date"
                        // pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                        name="dos"
                        required
                        id="endingdate"
                        value={endingDate}
                        onChange={(e) => setEndingDate(e.target.value)}
                        placeholder="YYYY-MM-DD"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter  Project Description"
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Select Research Status</Form.Label>
                  <Form.Control
                    type="text"
                    as="select"
                    required
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </Form.Control>
                </Form.Group>
                {/* <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Enter Research status"
                  />
                </Form.Group> */}

                {/* <Row>
                  <Col>
                    <Form.Group controlId="dob">
                      <Form.Label>Select Date Created</Form.Label>
                      <Form.Control
                        type="date"
                        name="dos"
                        required
                        id="dateCreated"
                        value={dateCreated}
                        onChange={(e) => setDateCreated(e.target.value)}
                        placeholder="Date Createdd"
                      />
                    </Form.Group>
                  </Col>
                </Row>  */}
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
                      School of Information and Communication Technology-SOICT
                    </option>
                    <option>
                      School of Architecture and the Built Environment - SABE
                    </option>
                    <option>School of Engineering-SOE</option>
                    <option>School of Mining and Geology-SMG</option>
                    <option>School of Science-SOS</option>
                  </Form.Control>
                </Form.Group>
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








                <Col className="text-center">
                  <Button className="" type="submit">
                    Create Research
                  </Button>
                </Col>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateResearch;
