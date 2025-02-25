import React, { useState } from "react";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "./Header";
import axios from "axios";
import Menu from "./Menu";
import { useHistory } from "react-router-dom";
let token = localStorage.getItem("token");

const ChapterBased = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [booktitle, setBooktitle] = useState("");
  const [pubdate, setPubdate] = useState("");
  const [chapterpage, setChapterPage] = useState("");
  const [place, setPlace] = useState("");
  const [editor, setEditor] = useState("");
  const [noofpages, setNofPages] = useState("");
  const [isbn, setISBN] = useState("");
  const [school, setSchool] = useState("");
  const [depart, setDepart] = useState("");
  const [researches, setResearches] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      chapter_title: title,
      author: author,
      book_title: booktitle,
      publication_year: pubdate,
      chapNumbers: chapterpage,
      place: place,
      editors: editor,
      no_of_pages: noofpages,
      isbn: isbn,
      school_name: school,
      departement: depart,
    };

    axios
      .post(
        "http://127.0.0.1:8000/researches/chapter-based-research/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/Chapter");
      })
      .catch(function (error) {
        console.log("Error response: ", error);
      });

    // window.location.reload();
    console.warn(
      title,
      author,
      chapterpage,
      place,
      editor,
      noofpages,
      isbn,
      school,
      depart
    );
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
                  Chapter Based Information
                </h2>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Chapter Title"
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
                </Form.Group>
                <Form.Group>
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="booktitle"
                    value={booktitle}
                    onChange={(e) => setBooktitle(e.target.value)}
                    placeholder="Book Title"
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
                    placeholder="Book Editor"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>chapter pages</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    id="chapterpage"
                    value={chapterpage}
                    onChange={(e) => setChapterPage(e.target.value)}
                    placeholder="Book Title"
                  />
                </Form.Group>
                <Row>
                  {/* <Col>
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
                  </Col> */}
                  <Col>
                    <Form.Group>
                      <Form.Label>Publication Place</Form.Label>
                      <Form.Control
                        type="text"
                        name="dos"
                        id="place"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
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
                        value={noofpages}
                        onChange={(e) => setNofPages(e.target.value)}
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
                    Proceed
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
export default ChapterBased;
