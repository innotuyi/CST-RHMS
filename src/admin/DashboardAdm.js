import React, { useState, useEffect } from "react";
import { Col, Button, Table, Row } from "react-bootstrap";
import HeaderDashborad from "../components/HeaderDashborad";
// import { Bar, Line, Pie } from "react-chartjs-2";
import {} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Menu from "../components/Menu";

import AdminDashboard from "../screen/AdminDashboard";
const DashboardAdm = () => {
  let token = localStorage.getItem("token");
  const state = {
    labels: ["SoICT", "SoARC", "SoSCIE", "SoME", "SoGEO", "june"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [38, 29, 6, 29, 10, 33, 39],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        text: "Average Rainfall for Month",
        display: true,
        fontsize: 20,
      },
    },
  };

  const [products, setProduct] = useState([]);
  const [journal, setJournal] = useState([]);
  const [book, setBook] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [conference, setConference] = useState([]);
  const [mentorship, setMentorship] = useState([]);
  const [research, setResearch] = useState([]);
  const [community, SetCommunity] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-statistic/admin-community-engagment-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SetCommunity(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-statistic/Journal-article-schools/`,
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
        `http://127.0.0.1:8000/admin-statistic/admin-research-project-statistics/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResearch(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-statistic/admin-mentorship-statistics/`,
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
        `http://127.0.0.1:8000/admin-statistic/admin-book-based-statistics/`,
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
        `http://127.0.0.1:8000/admin-statistic/admin-chapter-book-based-statistics/`,
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

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-statistic/admin-conference-statistics/`,
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

  return (
    <div>
      <Menu />
      <Row>
        <AdminDashboard />
        <Col md={8}>
          <div
            class="row justify-content-center text-center"
            style={{
              background: "#F5F8FB",
            }}
          >
            <div
              class="col-md-4"
              style={{
                padding: "1rem",
              }}
            >
              <div class="card">
                <div class="card-body ">
                  <FontAwesomeIcon icon="fa-solid fa-car-bump" />
                  <div class="card-text">
                    <h4>Research</h4>
                  </div>
                  <span>
                  <strong>{research.Research_project}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="col-md-4"
              style={{
                padding: "1rem",
              }}
            >
              <div class="card">
                <div class="card-body ">
                  <FontAwesomeIcon icon="fa-solid fa-car-bump" />
                  <div class="card-text">
                    <h4>Community</h4>
                  </div>
                  <span>
                    <strong>{community.community_engagment}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="col-md-4"
              style={{
                padding: "1rem",
              }}
            >
              <div class="card">
                <div class="card-body ">
                  <FontAwesomeIcon icon="fa-solid fa-car-bump" />
                  <div class="card-text">
                    <h4>Mentorship</h4>
                  </div>
                  <span>
                    <strong>{mentorship.mentorship}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="col-md-4"
              style={{
                padding: "1rem",
              }}
            >
              <div class="card">
                <div class="card-body ">
                  <FontAwesomeIcon icon="fa-solid fa-car-bump" />
                  <div class="card-text">
                    <h4>Book</h4>
                  </div>
                  <span>
                    <strong>{book.book}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="col-md-4"
              style={{
                padding: "1rem",
              }}
            >
              <div class="card">
                <div class="card-body ">
                  <FontAwesomeIcon icon="fa-solid fa-car-bump" />
                  <div class="card-text">
                    <h4>Chapter</h4>
                  </div>
                  <span>
                    <strong>{chapter.chapter}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="col-md-4"
              style={{
                padding: "1rem",
              }}
            >
              <div class="card">
                <div class="card-body ">
                  <FontAwesomeIcon icon="fa-solid fa-car-bump" />
                  <div class="card-text">
                    <h4>Conference</h4>
                  </div>
                  <span>
                    <strong>{conference.conference}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="col-md-4"
              style={{
                padding: "1rem",
              }}
            >
              <div class="card">
                <div class="card-body ">
                  <FontAwesomeIcon icon="fa-solid fa-car-bump" />
                  <div class="card-text">
                    <h4>Journal</h4>
                  </div>
                  <span>
                    <strong>{journal.journal_article}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 justify-content-center text-center">
              {/* <Bar data={state} options={options} /> */}
            </div>
            <div class="col-md-6 justify-content-center text-center">
              {/* <Line data={state} options={options} /> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DashboardAdm;
