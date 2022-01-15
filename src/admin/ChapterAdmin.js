import React, { useState, useEffect } from "react";
import { Col, Button, Table, Row } from "react-bootstrap";
import HeaderDashborad from "../components/HeaderDashborad";
import { Link, useHistory } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";

import AdminDashboard from "../screen/AdminDashboard";

const ChapterAdmin = () => {
  const history = useHistory();
  let token = localStorage.getItem("token");
  const [products, setProduct] = useState([]);

  const showEditForm = (id) => {
    history.push(`/EditChapterAdmin/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/admin-search/chapter-book-based-filters/`,
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
            <h4 className="table-header text-left">Chapter Based</h4>
            <Button className="btn-primary text-right add-btn">export</Button>
          </div>

          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                {/* <th>Publication Year</th>
                <th>Book Title</th>
                  <th>Chap Number</th>
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
                  <td>{product.chap_based_id}</td>
                  <td>{product.chapter_title}</td>
                  {/* <td>{product.author}</td> 
                   <td>{product.publication_year}</td> 
                  <td>{product.book_title}</td>
                  <td>{product.chapNumbers}</td>
                  <td>{product.editors}</td>
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
                      onClick={(e) => showEditForm(product.chap_based_id)}
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

export default ChapterAdmin;
