import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { Row, Col, Container, Form, Button, Jumbotron } from "react-bootstrap";
import Menu from "../components/Menu";
let token = localStorage.getItem("token");

const EditCommunity = () => {
  const history = useHistory();
  const { id } = useParams();
  const [specializedArea, setName] = useState("");
  const [communityActivity, setLevel] = useState("");
  const [outputInCommunity, setTitle] = useState("");
  const [planforCommunityEngagement, setPlan] = useState("");
  const [school_name, setSchool] = useState("");
  const [departement, setDepart] = useState("");
  const [comment, setComment] = useState("");
  const [researches, setResearches] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/community/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResearches(data);
      setName(data.specializedArea);
      setTitle(data.communityActivity);
      setLevel(data.outputInCommunity);
      setPlan(data.planforCommunityEngagement);
      setSchool(data.school_name);
      setDepart(data.departement);
      setComment(data.comment);
    }
    fetchProducts();
  }, []);

  if (!researches) {
    return <p>Processing</p>;
  }

  console.log(specializedArea);
  console.log(communityActivity);
  console.log(outputInCommunity);
  console.log(planforCommunityEngagement);
  console.log(school_name);
  console.log(departement);
  console.log(comment);

  const submitHandler = (e) => {
    e.preventDefault();
    console.warn(
      specializedArea,
      communityActivity,
      outputInCommunity,
      planforCommunityEngagement,
      school_name,
      departement,
      comment
    );
    const payload = {
      specializedArea: specializedArea,
      communityActivity: communityActivity,
      outputInCommunity: outputInCommunity,
      planforCommunityEngagement: planforCommunityEngagement,
      school_name: school_name,
      departement: departement,
      comment: comment,
    };

    axios
      .put(`http://127.0.0.1:8000/researches/community/${id}/`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log("Successful response: ", response);
        history.push("/Community");
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
                  Community Edit
                </h2>
                <Form.Group>
                  <Form.Label>Specialized Area</Form.Label>
                  <Form.Control
                    required
                    type="Text"
                    id="specializedArea"
                    value={specializedArea}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Specialized Area"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Community Activity</Form.Label>
                  <Form.Control
                    required
                    type="Text"
                    placeholder="Community Activity"
                    id="communityActivity"
                    value={communityActivity}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Output In Community</Form.Label>
                  <Form.Control
                    required
                    type="Text"
                    placeholder="Output In Community"
                    id="outputInCommunity"
                    value={outputInCommunity}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Plan For Community Engagement</Form.Label>
                  <Form.Control
                    required
                    type="Text"
                    placeholder="Plan For Community Engagement"
                    id="planforCommunityEngagement"
                    value={planforCommunityEngagement}
                    onChange={(e) => setPlan(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col>
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
                        <option>
                          School of Information and Communication
                          Technology-SOICT
                        </option>
                        <option>
                          School of Architecture and the Built Environment -
                          SABE
                        </option>
                        <option>School of Engineering-SOE</option>
                        <option>School of Mining and Geology-SMG</option>
                        <option>School of Science-SOS</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group controlId="">
                      <Form.Label>Department Name</Form.Label>
                      <Form.Control
                        as="select"
                        required
                        id="departement"
                        value={departement}
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
                  </Col>
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
                </Row>
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
};

export default EditCommunity;
