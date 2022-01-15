import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Button, Table, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Sidebar from "../components/sidebar";
import Menu from "../components/Menu";
import Paginate from "../components/Paginate";
let token = localStorage.getItem("token");

function Mentorship() {
  const history = useHistory();
  const [products, setProduct] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Mentorship?")) {
      axios
        .delete(`http://127.0.0.1:8000/researches/mentorship/${id}/`)
        .then((res) => {
          ToastsStore.warning("Successfully Deleted!");
        })
        .catch(function (error) {
          console.log("Error response: ", error);
        });
    }
  };

  const viewRow = (id) => {
    history.push(`/SingleMentorhip/${id}`);
  };

  const showEditForm = (id) => {
    history.push(`/EditMentorship/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/mentorship/`,
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

  return (
    <div>
      <Menu />
      <hr />
      <Row>
        <Sidebar />
        <Col md={8}>
          <div className="text-right m-3">
            <h4 className="table-header text-left">Recent Mentorships</h4>
            <Button className="btn-primary text-right add-btn">
              <Link to="/Mentoship" className="text-light">
                Add new
              </Link>
            </Button>
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                {/* <th>Level</th>
                <th>Project Title</th>
                <th>University</th>
                <th>School</th>
                <th>Department</th> */}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.mentorshipId}</td>
                  <td>{product.staff_or_student_mentored}</td>
                  {/* <td>{product.level}</td>
                  <td>{product.studentsprojectTitle}</td>
                  <td>{product.university}</td>
                  <td>{product.school_name}</td>
                  <td>{product.departement}</td> */}

                  <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="dark"
                      id="printPageButton"
                      onClick={(e) => showEditForm(product.mentorshipId)}
                    >
                      <i className="fa fa-pencil"></i>
                    </Button>
                  </td>
                  <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="light"
                      id="printPageButton"
                      onClick={(e) => viewRow(product.mentorshipId)}
                    >
                      <i class="fa fa-eye"></i>
                    </Button>
                  </td>
                  <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="light"
                      id="printPageButton"
                      onClick={() => {
                        deleteHandler(product.mentorshipId);
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Paginate />
        </Col>
      </Row>
    </div>
  );
}

export default Mentorship;
