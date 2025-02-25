import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "./Header";
import Menu from "./Menu";
let token = localStorage.getItem("token");

const ConferenceBased = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [pubdate, setPubdate] = useState("");
  const [theme, setTheme] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [confplace, setConfPlace] = useState("");
  const [editor, setEditor] = useState("");
  const [chapterPage, setChapterPage] = useState("");
  const [isbn, setISBN] = useState("");
  const [school, setSchool] = useState("");
  const [depart, setDepart] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      confer_name: name,
      author: author,
      theme: theme,
      date_of_publication: pubdate,
      organizer: organizer,
      place: confplace,
      editor: editor,
      no_of_pages: chapterPage,
      isbn: isbn,
      school_name: school,
      departement: depart,
    };
    axios
      .post(
        "http://127.0.0.1:8000/researches/peer-review-international-conference/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/Conference");
        // window.location.reload();
      })
      .catch(function (error) {
        console.log("Error response: ", error);
      });

    console.warn(name, theme, organizer, editor, chapterPage, confplace, isbn);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, 84%, #1089AF)",
      }}
    >
      <Menu />
      <Container>
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
                  Conference Based Research Information
                </h2>
                <Form.Group>
                  <Form.Label>Conference name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter The Name Of The Conference"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Author</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    id="name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Enter Author Name"
                  />
                </Form.Group>
                <Form.Group controlId="dob">
                  <Form.Label>Select Publication Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="dos"
                    id="pubdate"
                    value={pubdate}
                    onChange={(e) => setPubdate(e.target.value)}
                    placeholder="Publication Date"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Conference Theme</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="theme"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    placeholder="Enter Conference Theme "
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Orgnizer's Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="organizer"
                    value={organizer}
                    onChange={(e) => setOrganizer(e.target.value)}
                    placeholder="Enter Orgnizer's Name"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    {/* <Form.Group controlId="dob">
                        <Form.Label>Select Conference Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="dos"
                          required
                          id="date"
                          value={confDate}
                          onChange={(e) => setConfDate(e.target.value)}
                          placeholder="Conference Date"
                        />
                      </Form.Group> */}
                    <Form.Group>
                      <Form.Label> Place</Form.Label>
                      <Form.Control
                        type="text"
                        name="dos"
                        required
                        id="place"
                        value={editor}
                        onChange={(e) => setEditor(e.target.value)}
                        placeholder="Enter Conference Location"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Editor</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        id="name"
                        value={confplace}
                        onChange={(e) => setConfPlace(e.target.value)}
                        placeholder="Enter The Name Of The Conference"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="">
                      <Form.Label>Chapter Pages</Form.Label>
                      <Form.Control
                        type="Number"
                        name=""
                        required
                        id="page"
                        value={chapterPage}
                        onChange={(e) => setChapterPage(e.target.value)}
                        placeholder="Enter The Number Of Pages"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>ISBN</Form.Label>
                      <Form.Control
                        required
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
                    Create
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

export default ConferenceBased;
