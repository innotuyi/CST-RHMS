import React, { useState, useEffect } from "react";
import { Col, Button, Table, Row } from "react-bootstrap";
import HeaderDashborad from "../components/HeaderDashborad";
import { Link, useHistory } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import AdminDashboard from "../screen/AdminDashboard";

const JournalBasedAdmin = () => {
  const history = useHistory();
  let token = localStorage.getItem("token");
  const [products, setProduct] = useState([]);

  const showEditForm = (id) => {
    history.push(`/EditJournalAdmin/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-statistic/all-journal-article/`,
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
            <h4 className="table-header text-left">Journal Based</h4>
            <Button className="btn-primary text-right add-btn">export</Button>
          </div>

          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                {/* <th>Publication Year</th> 
                    <th>Journal</th>
                    <th>Volume</th>
                    <th>Series</th>
                     <th>Publisher</th> 
                    <th>Pages</th>
                    <th>ISSN</th>
                    <th>Impact Factor</th>
                    <th>Journal Indexing</th>
                    <th>School</th>
                    <th>Department</th> */}
                <th>Comment</th>
                <th>Staff</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.journal_id}</td>
                  <td>{product.title}</td>
                  <td>{product.author}</td>
                  {/* <td>{product.publication_year}</td>
                      <td>{product.journal}</td>
                      <td>{product.Volume}</td>
                      <td>{product.series}</td>
                      <td>{product.publisher}</td>
                      <td>{product.pages}</td>
                      <td>{product.issn}</td>
                      <td>{product.impact_factor}</td>
                      <td>{product.journal_indexing}</td>
                      <td>{product.school_name}</td>
                      <td>{product.departement}</td> */}
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
                      onClick={(e) => showEditForm(product.journal_id)}
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

export default JournalBasedAdmin;
