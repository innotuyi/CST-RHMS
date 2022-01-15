import React, { useState, useEffect } from "react";
import axios from "axios";

import HeaderDashborad from "../components/HeaderDashborad";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { researchData } from "../research";
import Mentorship from "./Mentorship";
import Community from "./Community";
import Research from "./Research";

import { staffData } from "../staff";
function Dashboard() {
  let token = localStorage.getItem("token");
  const [products, setProduct] = useState([]);
  const [mentorship, setMentorship] = useState([]);
  const [commu, setCommu] = useState([]);
  const [journal, setJournal] = useState([]);
  const [conference, setConference] = useState([]);
  const [book, setBook] = useState([]);
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/data-statistic/research-project-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProduct(data);
    }
    fetchProducts();
  }, []);


  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/data-statistic/mentorship-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMentorship(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/data-statistic/community-engagment-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCommu(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/data-statistic/journal-article-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJournal(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/data-statistic/conference-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setConference(data);
    }
    fetchProducts();
  }, []);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
       `http://127.0.0.1:8000/data-statistic/book-based-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBook(data);
    }
    fetchProducts();
  }, []);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
       `http://127.0.0.1:8000/data-statistic/chapter-book-based-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setChapter(data);
    }
    fetchProducts();
  }, []);




  return (
    <div>
      <HeaderDashborad />
      <hr />
      <Container className="pb-5  mb-5">
        <Row>
          <Col md={4} col={12}>
            <div className="profile">
              <FaUser
                style={{
                  color: "#2293C2",
                  fontSize: "5rem",
                }}
                className="text-center"
              />
              <h6 className="pt-4">
                <strong>Staff info</strong>
              </h6>
             Email: {localStorage.getItem("email")}

              {/* {staffData.map((staff) => (
                <h6>
                  <strong>
                    {staff.firstname} {staff.lastname}
                  </strong>
                </h6>
              ))} */}

              <h6>
              Username:  <strong>   {localStorage.getItem("username")}</strong>
              </h6>
              <h6>
              Firstanme:  <strong>   {localStorage.getItem("firstname")}</strong>
              </h6>
            
            
              <FaUserEdit
                style={{
                  fontSize: "3rem",
                  color: "#036F9D",
                }}
              />
            </div>
          </Col>

          <Col md={8} col={12}>
            <div className="right-sidebar">
              <span className="dash-text">
                <strong>Overview</strong>
              </span>
              <h6 className="p-5">
                <strong>Here is the overview of your work</strong>
              </h6>
              <Row>
                <Col md={4} col={12} className="">
                  <Link to="/Dash">
                    <Card style={{ width: "12rem" }}>
                      <Card.Header
                        className="text-center"
                        style={{ background: "#005792", border: "none" }}
                        className="respo"
                      >
                        <h5>Research</h5>
                      </Card.Header>
                      <Card.Body>
                        <h1
                          className="text-center"
                          className="text-center"
                          style={{ color: "#005792" }}
                        >
                          {products.Research_project}
                        </h1>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col md={4} col={12} className="">
                  <Link to="/Mentorship">
                    <Card style={{ width: "12rem" }} className="respo">
                      <Card.Header
                        className="text-center"
                        style={{ background: "#005792", border: "none" }}
                      >
                        <h5>Mentorship</h5>
                      </Card.Header>
                      <Card.Body>
                        <h1
                          className="text-center"
                          className="text-center"
                          style={{ color: "#005792" }}
                        >
                          {mentorship.mentorship}
                        </h1>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>

                <Col md={4} col={12}>
                  <Link to="/Community">
                    <Card style={{ width: "12rem" }} className="respo">
                      <Card.Header
                        className="text-center"
                        style={{ background: "#005792", border: "none" }}
                      >
                        <h5>Community</h5>
                      </Card.Header>
                      <Card.Body>
                        <h1
                          className="text-center"
                          className="text-center"
                          style={{ color: "#005792" }}
                        >
                         { commu.community_engagment}
                        </h1>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Link to="/Journal">
                  <Col md={4} col={12} className="mt-2">
                    <Card style={{ width: "12rem" }} className="respo">
                      <Card.Header
                        className="text-center"
                        style={{ background: "#005792", border: "none" }}
                      >
                        <h5>Journal</h5>
                      </Card.Header>
                      <Card.Body>
                        <h1
                          className="text-center"
                          className="text-center"
                          style={{ color: "#005792" }}
                        >
                         {journal.journal_article}
                        </h1>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
                <Link to="/Conference">
                  <Col md={4} className="mt-2 ml-2">
                    <Card style={{ width: "12rem" }} className="respo">
                      <Card.Header
                        className="text-center"
                        style={{ background: "#005792", border: "none" }}
                      >
                        <h5>Conference</h5>
                      </Card.Header>
                      <Card.Body>
                      <h1
                          className="text-center"
                          className="text-center"
                          style={{ color: "#005792" }}
                        >
                         {conference.conference}
                        </h1>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
                <Link to="/Book">
                  <Col md={4} className="mt-2 ml-2">
                    <Card style={{ width: "12rem" }} className="respo">
                      <Card.Header
                        className="text-center"
                        style={{ background: "#005792", border: "none" }}
                      >
                        <h5>Book</h5>
                      </Card.Header>
                      <Card.Body>
                        <h1
                          className="text-center"
                          style={{ color: "#005792" }}
                        >
                       {book.book}
                        </h1>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
                <Link to="/Chapter">
                  <Col md={4} className="mt-2 ml-2">
                    <Card style={{ width: "12rem" }} className="respo">
                      <Card.Header
                        className="text-center"
                        style={{ background: "#005792", border: "none" }}
                      >
                        <h5>Chapter</h5>
                      </Card.Header>
                      <Card.Body>
                        <h1
                          className="text-center"
                          style={{ color: "#005792" }}
                        >
                         {chapter.chapter}
                        </h1>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
