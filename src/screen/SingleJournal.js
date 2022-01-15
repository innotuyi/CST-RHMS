import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Button, Table, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Menu from "../components/Menu";
let token = localStorage.getItem("token");

const SingleJournal = () => {
  const [researches, setResearches] = useState([]);

  console.log(localStorage.getItem("token"));
  //let token = localStorage.token;

  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/peer-review-journal-article/${id}`,
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
            <h4 className="table-header text-left">Book In detail</h4>
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
                  Title of Journal
                </span>
                {researches.Title}
              </Card.Text>
              <Card.Text>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Author of Journal
                </span>
                {researches.author}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Publication Year:
                </span>

                {researches.publication_year}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Journal:
                </span>

                {researches.journal}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Volume:
                </span>

                {researches.Volume}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Series:
                </span>

                {researches.series}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Publisher:
                </span>

                {researches.publisher}
              </Card.Text>

              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Impact Factor:
                </span>

                {researches.impact_factor}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Pages:
                </span>

                {researches.pages}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  ISSN:
                </span>

                {researches.issn}
              </Card.Text>
              <Card.Text>
                <span
                  style={{
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                >
                  Journal Indexing:
                </span>

                {researches.journal_indexing}
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

export default SingleJournal;
