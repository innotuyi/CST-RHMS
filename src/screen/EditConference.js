import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
let token = localStorage.getItem("token");

const EditConference = () => {
  const { id } = useParams();
  const history = useHistory();
  const [confer_name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [date_of_publication, setPubdate] = useState("");
  const [theme, setTheme] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [place, setConfPlace] = useState("");
  const [editor, setEditor] = useState("");
  const [no_of_pages, setChapterPage] = useState("");
  const [isbn, setISBN] = useState("");
  const [school_name, setSchool] = useState("");
  const [departement, setDepart] = useState("");
  const [comment, setComment] = useState("");
  const [researches, setResearches] = useState(null);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/peer-review-international-conference/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResearches(data);
      setName(data.confer_name);
      setAuthor(data.author);
      setPubdate(data.date_of_publication);
      setTheme(data.theme);
      setOrganizer(data.organizer);
      setConfPlace(data.place);
      setEditor(data.editor);
      setChapterPage(data.no_of_pages);
      setISBN(data.isbn);
      setSchool(data.school_name);
      setDepart(data.departement);
      setComment(data.comment);
    }
    fetchProducts();

    if (!researches) {
      return <p>Processing</p>;
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      confer_name: confer_name,
      author: author,
      theme: theme,
      date_of_publication: date_of_publication,
      organizer: organizer,
      place: place,
      editor: editor,
      no_of_pages: no_of_pages,
      isbn: isbn,
      school_name: school_name,
      departement: departement,
      comment: comment,
    };

    axios
      .put(
        `http://127.0.0.1:8000/researches/peer-review-international-conference/${id}/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/Journal");
      })
      .catch(function (error) {
        console.log("Error response: ", error);
      });

    history.push("/Conference");

    console.warn(
      confer_name,
      theme,
      organizer,
      editor,
      no_of_pages,
      place,
      isbn
    );
  };
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, 84%, #1089AF)",
      }}
    >
      <Header />
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
                    id="confer_name"
                    value={confer_name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter The Name Of The Conference"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Author</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    id="author"
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
                    id="date_of_publication"
                    value={date_of_publication}
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
                      <Form.Label> Editor</Form.Label>
                      <Form.Control
                        type="text"
                        name="dos"
                        required
                        id="editor"
                        value={editor}
                        onChange={(e) => setEditor(e.target.value)}
                        placeholder="Enter Editor"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Editor</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        id="place"
                        value={place}
                        onChange={(e) => setConfPlace(e.target.value)}
                        placeholder="Enter place"
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
                        id="no_of_pages"
                        value={no_of_pages}
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
                <Form.Group controlId="">
                  <Form.Label>School Name</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    id="school_name"
                    value={school_name}
                    onChange={(e) => setSchool(e.target.value)}
                  >
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
                  >
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
                    Edit Conference
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

export default EditConference;
