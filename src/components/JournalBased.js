
import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Jumbotron,
} from "react-bootstrap";
import Header from "./Header";

const JournalBased = () => {
 const history = useHistory();
 const [title, setTitle] = useState("");
 const [author, setAuthor] = useState("");
 const [journel, setJournel] = useState("");
 const [volume, setVolume] = useState("");
 const [series, setSeries] = useState("");
 const [publsher, setPublisher] = useState("");
 const [pages, setPages] = useState("");
 const [issn, setIssn] = useState("");
 const [factor, setFactor] = useState("");
 const submitHandler = (e) => {
   e.preventDefault();
   const payload = {
    'title': title, 
    'author':author,
    'journal':journel,
    'Volume':volume,
    'series':series,
    'publisher': publsher, 
    'pages':pages,
    'issn':issn,
    'impact_factor':factor,
    'owner':1,
     'research':'PRJA1'}

axios.post('http://127.0.0.1:8000/journal/', payload)
.then(function (response) {
console.log('Successful response: ',  response);
})
.catch(function (error) {
console.log('Error response: ', error);
});
history.push('/Journal');
   console.warn(title, author, journel, volume, series, publsher, pages, issn, factor);
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
                  background:
                    "linear-gradient(to bottom, white , 80%, #1089AF )",
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
                      id="journel"
                    value={journel}
                    onChange={(e) => setJournel(e.target.value)}
                      placeholder="Enter The Journel"
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
                      id="publsher"
                      value={publsher}
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
}

export default JournalBased;