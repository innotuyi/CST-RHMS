import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
let token = localStorage.getItem("token");
const EditChapter = () => {
  const history = useHistory();
  const { id } = useParams();
  const [chapter_title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [book_title, setBooktitle] = useState("");
  const [publication_year, setPubdate] = useState("");
  const [chapNumbers, setChapterPage] = useState("");
  const [place, setPlace] = useState("");
  const [editors, setEditor] = useState("");
  const [no_of_pages, setNofPages] = useState("");
  const [isbn, setISBN] = useState("");
  const [school_name, setSchool] = useState("");
  const [departement, setDepart] = useState("");
  const [comment, setComment] = useState("");
  const [researches, setResearches] = useState(null);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/chapter-based-research/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResearches(data);
      setTitle(data.chapter_title);
      setAuthor(data.author);
      setBooktitle(data.book_title);
      setPubdate(data.publication_year);
      setChapterPage(data.chapNumbers);
      setPlace(data.place);
      setEditor(data.editors);
      setNofPages(data.no_of_pages);
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
  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      chapter_title: chapter_title,
      author: author,
      book_title: book_title,
      publication_year: publication_year,
      chapNumbers: chapNumbers,
      place: place,
      editors: editors,
      no_of_pages: no_of_pages,
      isbn: isbn,
      school_name: school_name,
      departement: departement,
      comment: comment
    };
    axios
      .put(
        `http://127.0.0.1:8000/researches/chapter-based-research/${id}/`,
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
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, 84%, #1089AF)",
      }}
    >
      <Header />
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
                  Chapter Based Information
                </h2>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="chapter_title"
                    value={chapter_title}
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
                      id="publication_year"
                      value={publication_year}
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
                    id="book_title"
                    value={book_title}
                    onChange={(e) => setBooktitle(e.target.value)}
                    placeholder="Book Title"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Editor</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="editors"
                    value={editors}
                    onChange={(e) => setEditor(e.target.value)}
                    placeholder="Book Editor"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>chapter pages</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    id="chapNumbers"
                    value={chapNumbers}
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
                        id="no_of_pages"
                        value={no_of_pages}
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
                    Edit Chapter
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

export default EditChapter;
