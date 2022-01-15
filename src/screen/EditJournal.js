import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
let token = localStorage.getItem("token");


const EditJournal = () => {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [journal, setJournal] = useState("");
  const [publication_year, setPubdate] = useState("");
  const [Volume, setVolume] = useState("");
  const [series, setSeries] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [issn, setIssn] = useState("");
  const [impact_factor, setFactor] = useState("");
  const [journal_indexing, setIndex] = useState("");
  const [school_name, setSchool] = useState("");
  const [departement, setDepart] = useState("");
  const [comment, setComment] = useState("");
  const [researches, setResearches] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/peer-review-journal-article/${id}`
      );
      setResearches(data);
      setTitle(data.title);
      setAuthor(data.author);
      setJournal(data.journal);
      setPubdate(data.publication_year);
      setVolume(data.Volume);
      setSeries(data.series);
      setPublisher(data.publisher);
      setPages(data.pages);
      setIssn(data.issn);
      setFactor(data.impact_factor);
      setIndex(data.journal_indexing);
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
      title: title,
      author: author,
      publication_year: publication_year,
      journal: journal,
      Volume: Volume,
      series: series,
      publisher: publisher,
      pages: pages,
      issn: issn,
      impact_factor: impact_factor,
      journal_indexing: journal_indexing,
      school_name: school_name,
      departement: departement,
      comment: comment
    };
    axios
      .put(
        `http://127.0.0.1:8000/researches/peer-review-journal-article/${id}/`,
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

    history.push("/Journal");
    console.warn(
      title,
      author,
      publication_year,
      journal,
      Volume,
      series,
      publisher,
      pages,
      issn,
      impact_factor,
      journal_indexing,
      school_name,
      departement
    );
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
        <Button className="btn-primary text-right add-btn">
          <Link to="/Dash" className="text-light">
            Back
          </Link>
        </Button>
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
                  Journal Based Research Information
                </h2>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter The Title Of Journel"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Enter The Author Email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Journal</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="journal"
                    value={journal}
                    onChange={(e) => setJournal(e.target.value)}
                    placeholder="Enter The Journel"
                  />
                </Form.Group>
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

                <Form.Group>
                  <Form.Label>Volume</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="volume"
                    value={Volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>series</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="series"
                    value={series}
                    onChange={(e) => setSeries(e.target.value)}
                    placeholder=""
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
                    placeholder="Enter Publisher Name"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Pages</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    id="pages"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>ISSN</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="issn"
                    value={issn}
                    onChange={(e) => setIssn(e.target.value)}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Impact factor</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="factor"
                    value={impact_factor}
                    onChange={(e) => setFactor(e.target.value)}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Journal Indexing</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="journal_indexing"
                    value={journal_indexing}
                    onChange={(e) => setIndex(e.target.value)}
                    placeholder=""
                  />
                </Form.Group>
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
};

export default EditJournal;
