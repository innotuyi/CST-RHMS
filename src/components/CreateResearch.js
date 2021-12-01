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

function CreateResearch() {

  const history = useHistory();

 
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  // const [dateCreated, setDateCreated] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if(type=="Chapter") {
      const payload = {
        'research_title': title, 
        'starting_date': setStartDate,
        'ending_date':endingDate, 
         'amount':amount,
         'status':status,
         // 'date_created':dateCreated,
          'owner':1}

axios.post('http://127.0.0.1:8000/research/', payload)
.then(function (response) {
console.log('Successful response: ',  response);
})
.catch(function (error) {
console.log('Error response: ', error);
});

    
history.push('/chapterbased');
    }
    else if(type=="Conference") {
      const payload = {
        'research_title': title, 
          'starting_date': setStartDate,
          'ending_date':endingDate, 
         'amount':amount,
         'status':status,
         // 'date_created':dateCreated,
          'owner':1}

axios.post('http://127.0.0.1:8000/research/', payload)
.then(function (response) {
console.log('Successful response: ',  response);
})
.catch(function (error) {
console.log('Error response: ', error);
});
      history.push('/ConferenceBased');

    }
    else if(type=="Book") {
      const payload = {
        'research_title': title, 
          'starting_date': setStartDate,
          'ending_date':endingDate, 
         'amount':amount,
         'status':status,
         // 'date_created':dateCreated,
          'owner':1}

axios.post('http://127.0.0.1:8000/research/', payload)
.then(function (response) {
console.log('Successful response: ',  response);
})
.catch(function (error) {
console.log('Error response: ', error);
});
      history.push('/bookbased');
     
      
    }

    else if(type=="Jounal") {
      const payload = {
        'research_title': title, 
          'starting_date': setStartDate,
          'ending_date':endingDate, 
         'amount':amount,
         'status':status,
         // 'date_created':dateCreated,
          'owner':1}

axios.post('http://127.0.0.1:8000/research/', payload)
.then(function (response) {
console.log('Successful response: ',  response);
})
.catch(function (error) {
console.log('Error response: ', error);
});
      history.push('/JournalBased');
      
    }
    else  {

      console.warn(title,amount, status);

    }
    
   };


  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, 84%, #1089AF)",
        height:"100vh"
      }}
    >
      <Header />
      <Container>
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
                  Create New Research
                </h2>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Research Title"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="dob">
                      <Form.Label>Select Starting Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dos"
                        required
                        id="startdate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder="Starting Date"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Select Ending Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dos"
                        required
                        id="endingdate"
                        value={endingDate}
                        onChange={(e) => setEndingDate(e.target.value)}
                        placeholder="Ending Date"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                 <Form.Group>
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter  Project Description"
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Select Research Status</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    
                  >
                   
                    <option value="ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                   
                  </Form.Control>
                </Form.Group>
                {/* <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Enter Research status"
                  />
                </Form.Group> */}

                
{/* 
                <Row>
                  <Col>
                    <Form.Group controlId="dob">
                      <Form.Label>Select Date Created</Form.Label>
                      <Form.Control
                        type="date"
                        name="dos"
                        required
                        id="dateCreated"
                        value={dateCreated}
                        onChange={(e) => setDateCreated(e.target.value)}
                        placeholder="Date Createdd"
                      />
                    </Form.Group>
                  </Col>
                </Row> */}
                <Form.Group controlId="">
                  <Form.Label>Select Research Expected Outcome</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                   
                  >
                    <option value="Jounal">Jounal Based Research</option>
                    <option value="Conference">Conference Based Research</option>
                    <option value="Book">Book Based Research</option>
                    <option value="Chapter">Chapter Based Research</option>
                    <option></option>
                  </Form.Control>
                </Form.Group>
                <Col className="text-center">
                  <Button className="" type="submit">
                    Create Research
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

export default CreateResearch;
