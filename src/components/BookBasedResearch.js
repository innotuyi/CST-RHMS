import React, { useState } from "react";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "./Header";

function BookBasedResearch() {
  const [author, setAuthor] = useState("");
  const [editor, setEditor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [pugeNumber, setPageNumber] = useState("");
  const [pubPlace, setPubPlace] = useState("");
  const [isbn, setISBN] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.warn(
      author,
      editor,
      publisher,
      pubDate,
      pugeNumber,
      pubPlace,
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
                  Book Based Information
                </h2>
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
}

export default BookBasedResearch;
