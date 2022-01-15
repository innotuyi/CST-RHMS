import React, { useState, useEffect } from "react";
import { Col, Button, Table, Row } from "react-bootstrap";
import HeaderDashborad from "../components/HeaderDashborad";
import { Link, useHistory } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";

import AdminDashboard from "../screen/AdminDashboard";

const ConferenceBasedAdmin = () => {
  const history = useHistory();
  let token = localStorage.getItem("token");
  const [products, setProduct] = useState([]);

  const showEditForm = (id) => {
    history.push(`/EditConferenceAdmin/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-statistic/all-research-conferance/`,
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
            <h4 className="table-header text-left">Conference Based</h4>
            <Button className="btn-primary text-right add-btn">export</Button>
          </div>

          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                {/* <th>Author</th>
                    <th>Publication Year</th>
                    <th>Theme</th>
                      <th>Organizer</th>
                    <th>Place</th>
                    <th>Editor</th> 
                     <th>Number Of Pages</th>
                    <th>ISBN</th>
                    <th>School</th>
                    <th>Department</th> */}
                <th>Comment</th>
                <th>Staff</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.confer_id}</td>
                  <td>{product.confer_name}</td>
                  {/* <td>{product.author}</td> 
                       <td>{product.date_of_publication}</td> 
                      <td>{product.theme}</td>
                      <td>{product.organizer}</td>
                      <td>{product.place}</td>
                      <td>{product.editor}</td>
                      <td>{product.no_of_pages}</td>
                      <td>{product.isbn}</td>
                      <td>{product.school_name}</td>
                      <td>{product.departement}</td> */}
                  <td>{product.staff}</td>
                  <td>{product.comment}</td>

                  <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="dark"
                      id="printPageButton"
                      onClick={(e) => showEditForm(product.confer_id)}
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

export default ConferenceBasedAdmin;
