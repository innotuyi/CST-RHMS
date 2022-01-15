import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Button, Table, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Menu from "../components/Menu";
let token = localStorage.getItem("token");


const SingleConference = () => {
  const [researches, setResearches] = useState([]);

  console.log(localStorage.getItem("token"));
  //let token = localStorage.token;

  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/peer-review-international-conference/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );
      setResearches(data);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <Menu />
      <hr />
      <Row>
        <Sidebar />

        <Col md={8}>
          <div className="text-right m-3">
            <h4 className="table-header text-left">Conference In detail</h4>
            <Button className="btn-primary text-right add-btn">
              <Link to="/Dash" className="text-light">
                Back
              </Link>
            </Button>
          </div>
          <Card>
            <Card.Body>
              <Card.Text>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Title of Conference
                </span>
                {researches.confer_name}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Publication Date:
                </span>

                {researches.date_of_publication}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Conference Theme:
                </span>

                {researches.theme}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Organizer Of Conference:
                </span>

                {researches.organizer}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Place:
                </span>

                {researches.place}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Editor:
                </span>

                {researches.editor}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Number of Pages:
                </span>

                {researches.no_of_pages}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  ISBN:
                </span>

                {researches.isbn}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  School Name:
                </span>

                {researches.school_name}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Department Name:
                </span>

                {researches.departement}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Comment:
                </span>

                {researches.comment}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SingleConference;
