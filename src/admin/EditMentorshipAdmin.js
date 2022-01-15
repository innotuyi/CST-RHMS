import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Menu from "../components/Menu";
let token = localStorage.getItem("token");


const EditMentorshipAdmin = () => {
    const history = useHistory();
    const { id } = useParams();
    const [staff_or_student_mentored, setName] = useState("");
    const [level, setLevel] = useState("");
    const [studentsprojectTitle, setTitle] = useState("");
    const [university, setUniversity] = useState("");
    const [school_name, setSchool] = useState("");
    const [departement, setDepart] = useState("");
    const [comment, setComment] = useState("");
    const [researches, setResearches] = useState(null);
  
    useEffect(() => {
      async function fetchProducts() {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/admin-statistic/all-mentorship-activities/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setResearches(data);
        setName(data.staff_or_student_mentored);
        setTitle(data.studentsprojectTitle);
        setLevel(data.level);
        setUniversity(data.university);
        setSchool(data.school_name);
        setDepart(data.departement);
        setComment(data.comment);
      }
      fetchProducts();
    }, []);
  
    if (!researches) {
      return <p>Processing</p>;
    }
  
    console.log(staff_or_student_mentored);
    console.log(studentsprojectTitle);
    console.log(level);
    console.log(university);
    console.log(school_name);
    console.log(departement);
    console.log(comment);
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.warn(
        staff_or_student_mentored,
        level,
        studentsprojectTitle,
        school_name,
        university,
        departement,
        comment
      );
      const payload = {
        staff_or_student_mentored: staff_or_student_mentored,
        level: level,
        studentsprojectTitle: studentsprojectTitle,
        university: university,
        school_name: school_name,
        departement: departement,
        comment: comment,
      };
  
      axios
        .put(
          `http://127.0.0.1:8000/admin-statistic/all-mentorship-activities/${id}/`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(function (response) {
          console.log("Successful response: ", response);
          history.push("/MentorshipAdmin");
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
              <Link to="/Mentorship" className="text-light">
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
                      Mentorship Based Information
                    </h2>
                    <Form.Group>
                      <Form.Label>Enter Student's Name</Form.Label>
                      <Form.Control
                        required
                        type="Text"
                        id="staff_or_student_mentored"
                        value={staff_or_student_mentored}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Student's Name"
                        readOnly/>
                    </Form.Group>
    
                    <Form.Group controlId="">
                      <Form.Label>Level Name</Form.Label>
                      <Form.Control
                        as="select"
                        required
                        id="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        readOnly>
                        <option>Select Level</option>
                        <option>Masters</option>
                        <option>Bacheros</option>
                        <option>PhD</option>
                      </Form.Control>
                    </Form.Group>
    
                    <Form.Group>
                      <Form.Label>Enter The Project Title</Form.Label>
                      <Form.Control
                        required
                        type="Text"
                        placeholder="Enter The Project Title"
                        id="studentsprojectTitle"
                        value={studentsprojectTitle}
                        onChange={(e) => setTitle(e.target.value)}
                        readOnly />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Enter The Student's University</Form.Label>
                      <Form.Control
                        required
                        type="Text"
                        placeholder="Enter The Student's University"
                        id="university"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        readOnly/>
                    </Form.Group>
                    <Row></Row>
                    <Form.Group controlId="">
                      <Form.Label>School Name</Form.Label>
                      <Form.Control
                        as="select"
                        required
                        id="school_name"
                        value={school_name}
                        onChange={(e) => setSchool(e.target.value)}
                        readOnly>
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
                        readOnly>
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
                        Update
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

export default EditMentorshipAdmin
