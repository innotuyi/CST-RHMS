import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
let token = localStorage.getItem("token");

const EditResearchAdmin = () => {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [funding_source, setSource] = useState("");
  const [starting_date, setStartDate] = useState("");
  const [ending_date, setEndingDate] = useState("");
  const [funding_amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [school_name, setSchool] = useState("");
  const [departement, setDepart] = useState("");
  const [comment, setComment] = useState("");
  const [researches, setResearches] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-statistic/all-research-project/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResearches(data);

      setTitle(data.research_title);
      setSource(data.funding_source);
      setStartDate(data.starting_date);
      setEndingDate(data.ending_date);
      setAmount(data.funding_amount);
      setStatus(data.status);
      setSchool(data.school_name);
      setDepart(data.departement);
      setComment(data.comment);
    }
    fetchProducts();
  }, []);

  /*

  console.log();
  console.log(researches.starting_date);
  console.log(researches.ending_date);
  console.log(researches.funding_amount);
  console.log(researches.status);

  */

  if (!researches) {
    return <p>Processing</p>;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      research_title: title,
      funding_source: funding_source,
      starting_date: starting_date,
      ending_date: ending_date,
      funding_amount: funding_amount,
      status: status,
      school_name: school_name,
      departement: departement,
      comment: comment,
    };

    axios
      .put(
        `http://127.0.0.1:8000/admin-statistic/all-research-project/${id}/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/ReasearchAdmin");
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
      <Header />
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
                  Update Research
                </h2>
                <Form.Group>
                  <Form.Label>Title</Form.Label>

                  <Form.Control
                    required
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  readOnly/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Finding Source</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="funding_source"
                    value={funding_source}
                    onChange={(e) => setSource(e.target.value)}
                    readOnly />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="dob">
                      <Form.Label>Select Starting Date</Form.Label>
                      <Form.Control
                        type="text"
                        name="dos"
                        required
                        id="startdate"
                        value={starting_date}
                        onChange={(e) => setStartDate(e.target.value)}
                        readOnly/>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Select Ending Date</Form.Label>
                      <Form.Control
                        type="text"
                        name="dos"
                        required
                        id="endingdate"
                        value={ending_date}
                        onChange={(e) => setEndingDate(e.target.value)}
                        readOnly />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    id="amount"
                    value={funding_amount}
                    onChange={(e) => setAmount(e.target.value)}
                    readOnly />
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
                    readOnly >
                    <option value="ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>School Name</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    id="school_name"
                    value={school_name}
                    onChange={(e) => setSchool(e.target.value)}
                    readOnly >
                    <option>Select school</option>
                    <option value="School of Information and Communication Technology-SOICT">
                      School of Information and Communication Technology-SOICT
                    </option>
                    <option value=" School of Architecture and the Built Environment - SABE">
                      School of Architecture and the Built Environment - SABE
                    </option>
                    <option value="School of Engineering-SOE">
                      School of Engineering-SOE
                    </option>
                    <option value="School of Mining and Geology-SMG">
                      School of Mining and Geology-SMG
                    </option>
                    <option value="School of Science-SOS">
                      School of Science-SOS
                    </option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Department Name</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    id="departement"
                    value={departement}
                    onChange={(e) => setDepart(e.target.value)}
                    readOnly>
                    <option>Select Department</option>
                    <option value="Departement of Computer Science">
                      Departement of Computer Science
                    </option>
                    <option value="Departement of Information System">
                      Departement of Information System
                    </option>
                    <option value="Departement of Information Technology">
                      Departement of Information Technology
                    </option>
                    <option value="Department of Architecture">
                      Department of Architecture
                    </option>
                    <option value="Department of Construction Management">
                      Department of Construction Management
                    </option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>
                <Col className="text-center">
                  <Button className="" type="submit">
                    Update
                  </Button>
                </Col>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditResearchAdmin;
