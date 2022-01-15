import React, { useState, useEffect } from "react";
import { Col, Button, Table, Row } from "react-bootstrap";
import HeaderDashborad from "../components/HeaderDashborad";
import { Link, useHistory } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import AdminDashboard from "../screen/AdminDashboard";

const MentorshipAdmin = () => {
  const history = useHistory();
  let token = localStorage.getItem("token");
  const [products, setProduct] = useState([]);
  const showEditForm = (id) => {
    history.push(`/EditMentorshipAdmin/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-statistic/all-mentorship-activities/`,
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
      <Row>
        <AdminDashboard />
        <Col md={8}>
          <div className="text-right m-3">
            <h4 className="table-header text-left">Community Engangement</h4>
            <Button className="btn-primary text-right add-btn">Export</Button>
          </div>

          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Monitored</th>
                <th>Level</th>
                <th>Project Title</th>
                <th>university</th>
                <th>School</th>
                <th>Department</th>
                <th>Comment</th>
                <th>Staff</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.mentorshipId}</td>
                  <td>{product.staff_or_student_mentored}</td>

                  <td>{product.studentsprojectTitle}</td>

                  <td>{product.university}</td>
                  <td>{product.school_name}</td>
                  <td>{product.departement}</td>
                  <td>{product.comment}</td>
                  <td>{product.staff}</td>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default MentorshipAdmin;
