import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "./Header";
import Menu from "./Menu";
let token = localStorage.getItem("token");

const JournalBased = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [journal, setJournal] = useState("");
  const [pubdate, setPubdate] = useState("");
  const [volume, setVolume] = useState("");
  const [series, setSeries] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [issn, setIssn] = useState("");
  const [factor, setFactor] = useState("");
  const [index, setIndex] = useState("");
  const [school, setSchool] = useState("");
  const [depart, setDepart] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      author: author,
      publication_year: pubdate,
      journal: journal,
      Volume: volume,
      series: series,
      publisher: publisher,
      pages: pages,
      issn: issn,
      impact_factor: factor,
      journal_indexing: index,
      school_name: school,
      departement: depart,
    };

    axios
      .post(
        "http://127.0.0.1:8000/researches/peer-review-journal-article/",
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
    console.warn(
      title,
      author,
      pubdate,
      journal,
      volume,
      series,
      publisher,
      pages,
      issn,
      factor,
      index,
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
                    id="pubdate"
                    value={pubdate}
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
                    value={volume}
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
                    value={factor}
                    onChange={(e) => setFactor(e.target.value)}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Journal Indexing</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="index"
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                    placeholder=""
                  />
                </Form.Group>

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

export default JournalBased;
