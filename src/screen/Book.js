import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Button, Table, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Sidebar from "../components/sidebar";
import Menu from "../components/Menu";
let token = localStorage.getItem("token");

const Book = () => {
  const history = useHistory();
  const [products, setProduct] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this research?")) {
      axios
        .delete(`http://127.0.0.1:8000/researches/book-based-research/${id}/`)
        .then((res) => {
          ToastsStore.warning("Successfully Deleted!");
        })
        .catch(function (error) {
          console.log("Error response: ", error);
        });
    }
  };

  const viewRow = (id) => {
    history.push(`/SingleBook/${id}`);
  };

  const showEditForm = (id) => {
    history.push(`/EditBook/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/book-based-research/`,
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
            <h4 className="table-header text-left">Book based Research</h4>
            <Button className="btn-primary text-right add-btn">
              <Link to="/bookbased" className="text-light">
                Add new
              </Link>
            </Button>
          </div>

          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                {/* <th>Author</th>
                <th>Publication Year</th>
                <th>Editor</th>
                <th>Publiser</th>
                <th>Place</th>
                <th>Pages</th>
                <th>ISBN</th> */}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.bookbased_id}</td>
                  <td>{product.title}</td>
                  {/* <td>{product.author}</td>
                  <td>{product.publication_year}</td>
                  <td>{product.editor}</td>
                  <td>{product.publisher}</td>
                  <td>{product.place}</td>
                  <td>{product.pages}</td>
                  <td>{product.isbn}</td> */}
                  <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="dark"
                      id="printPageButton"
                      onClick={(e) => showEditForm(product.bookbased_id)}
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
                      onClick={(e) => viewRow(product.bookbased_id)}
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
                        deleteHandler(product.bookbased_id);
                      }}
                    >
                      <i className="fa fa-trash"></i>
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

export default Book;
