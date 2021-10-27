import React, { useState } from "react";
import svg from "../images/Lecturesvg.svg";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Image,
  Jumbotron,
} from "react-bootstrap";
import Header from "./Header";

function Mentoship() {


  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
   const [university, setUniversity] = useState("");
   const [date, setDate] = useState("");

  const mentoHandler = (e) => {
    e.preventDefault();
    console.warn(name, title, university, date);
  };

    return (
      <div>
        <div
          style={{
            background: "linear-gradient(to bottom, white, 84%, #1089AF)",
          }}
        >
          <Header />
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
                    <Form.Group controlId="dob">
                      <Form.Label>Select The Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dos"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Choose Date"
                      />
                    </Form.Group>
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

export default Mentoship
