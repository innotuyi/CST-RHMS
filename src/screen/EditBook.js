import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Menu from '../components/Menu';

let token = localStorage.getItem("token");

const EditBook = () => {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editor, setEditor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publication_year, setPub] = useState("");
  const [pages, setPages] = useState("");
  const [place, setPlace] = useState("");
  const [isbn, setISBN] = useState("");
  const [school_name, setSchool] = useState("");
  const [departement, setDepart] = useState("");
  const [comment, setComment] = useState("");
  const [researches, setResearches] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/book-based-research/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResearches(data);
      setTitle(data.title);
      setAuthor(data.author);
      setEditor(data.editor);
      setPublisher(data.publisher);
      setPub(data.publication_year);
      setPages(data.pages);
      setPlace(data.place);
      setISBN(data.isbn);
      setSchool(data.school_name);
      setDepart(data.departement);
      setComment(data.comment);
    }
    fetchProducts();
  }, []);

  if (!researches) {
    return <p>Processing</p>;
  }

  console.log(title);
  console.log(author);
  console.log(editor);
  console.log(publisher);
  console.log(publication_year);
  console.log(pages);
  console.log(place);
  console.log(isbn);

  const submitHandler = (e) => {
    e.preventDefault();
    console.warn(
      title,
      author,
      editor,
      publisher,
      publication_year,
      pages,
      place,
      isbn
    );
    const payload = {
      title: title,
      author: author,
      publication_year: publication_year,
      editor: publisher,
      publisher: publisher,
      place: place,
      pages: pages,
      isbn: isbn,
      school_name: school_name,
      departement: departement,
      comment: comment,
    };

    axios
      .put(
        `http://127.0.0.1:8000/researches/book-based-research/${id}/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/Book");
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
                    <Form.Group>
                      <Form.Label>Select Publication Date</Form.Label>
                      <Form.Control
                        type="date"
                        id="publication_year"
                        value={publication_year}
                        onChange={(e) => setPub(e.target.value)}
                        placeholder="Publication Date"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Publication Place</Form.Label>
                      <Form.Control
                        type="text"
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
                    <Form.Group>
                      <Form.Label>Number Of Pages</Form.Label>
                      <Form.Control
                        type="Number"
                        id="pages"
                        value={pages}
                        onChange={(e) => setPages(e.target.value)}
                        placeholder="Enter The Number Of Pages"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>ISBN</Form.Label>
                      <Form.Control
                        type="Number"
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
                    Add
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

export default EditBook;
