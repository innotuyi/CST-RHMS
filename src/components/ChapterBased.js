import React, { useState } from "react";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Header from "./Header";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const ChapterBased = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [booktitle, setBooktitle] = useState("");
  const [chapterpage, setChapterPage] = useState("");
  const [place, setPlace] = useState("");
  const [editor, setEditor] = useState("");
  const [noofpages, setNofPages] = useState("");
  const [isbn, setISBN] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      'chapter_title': title, 
       'author':author,
       'book_title':booktitle,
       'chap_pages':chapterpage,
       'place':place,
       'editor':editor,   
       'no_of_pages':noofpages,
       'ISBN':isbn,       
       'research':'PRJA1'}


    axios.post('http://127.0.0.1:8000/chapter/', payload)
.then(function (response) {
console.log('Successful response: ',  response);
})
.catch(function (error) {
console.log('Error response: ', error);
});

history.push('/Chapter');
console.warn(
  title,
  author,
  chapterpage,
  place,
  editor,
  noofpages,
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
