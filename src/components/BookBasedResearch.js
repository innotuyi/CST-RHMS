import React, { useState } from "react";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Menu from "./Menu";
let token = localStorage.getItem("token");

function BookBasedResearch() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editor, setEditor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [pugeNumber, setPageNumber] = useState("");
  const [pubPlace, setPubPlace] = useState("");
  const [isbn, setISBN] = useState("");
  const [school, setSchool] = useState("");
  const [depart, setDepart] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.warn(
      title,
      author,
      editor,
      publisher,
      pubDate,
      pugeNumber,
      pubPlace,
      isbn
    );
    const payload = {
      title: title,
      author: author,
      publication_year: pubDate,
      editor: publisher,
      publisher: publisher,
      place: pubPlace,
      pages: pugeNumber,
      isbn: isbn,
      school_name: school,
      departement: depart,
    };

    axios
      .post("http://127.0.0.1:8000/researches/book-based-research/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/Dash");
        window.location.reload();
      })
      .catch(function (error) {
        console.log("Error response: ", error);
      });
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, 84%, #1089AF)",
      }}
    >
      <Menu />
      <Container>
        <Button className="btn-primary text-right add-btn">
          <Link to="/Dash" className="text-light">
            Back
          </Link>
        </Button>
        <Row className="d-flex justify-content-center arighn-item-center">
          <Col className="d-flex justify-content-center">
            <Jumbotron
              style={{
                background: "linear-gradient(to bottom, white , 80%, #1089AF )",
                borderRadius: "10px",
                width: "90%",
              }}
            >
              <Form className="form" style={{}} onSubmit={submitHandler}>
                <h2 className="text-center mb-5 text-secondary">
                  Book Based Information
                </h2>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Author's Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Enter Author's Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Editor</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="editor"
                    value={editor}
                    onChange={(e) => setEditor(e.target.value)}
                    placeholder="Enter Editor's Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Publisher</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="publisher"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    placeholder="Enter Publisher's Name"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="dob">
                      <Form.Label>Select Publication Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dos"
                        id="pubdate"
                        value={pubDate}
                        onChange={(e) => setPubDate(e.target.value)}
                        placeholder="Publication Date"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Publication Place</Form.Label>
                      <Form.Control
                        type="text"
                        name="dos"
                        id="pubplace"
                        value={pubPlace}
                        onChange={(e) => setPubPlace(e.target.value)}
                        placeholder="Enter Publication Place"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="">
                      <Form.Label>Number Of Pages</Form.Label>
                      <Form.Control
                        type="Number"
                        name=""
                        id="pugnumber"
                        value={pugeNumber}
                        onChange={(e) => setPageNumber(e.target.value)}
                        placeholder="Enter The Number Of Pages"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>ISBN</Form.Label>
                      <Form.Control
                        type="Number"
                        name=""
                        id="isbn"
                        value={isbn}
                        onChange={(e) => setISBN(e.target.value)}
                        placeholder="Enter ISBN"
                      />
                    </Form.Group>
                  </Col>
                </Row>
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
                    Add New
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

export default BookBasedResearch;
