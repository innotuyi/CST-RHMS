import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Button, Table, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Menu from "../components/Menu";

import { ToastsContainer, ToastsStore } from "react-toasts";
import Sidebar from "../components/sidebar";
let token = localStorage.getItem("token");

const Journal = () => {
  const history = useHistory();
  const [products, setProduct] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this research?")) {
      axios
        .delete(
          `http://127.0.0.1:8000/researches/peer-review-journal-article/${id}/`
        )
        .then((res) => {
          ToastsStore.warning("Successfully Deleted!");
        })
        .catch(function (error) {
          console.log("Error response: ", error);
        });
    }
  };

  const viewRow = (id) => {
    history.push(`/SingleJournal/${id}`);
  };

  const showEditForm = (id) => {
    history.push(`/EditJournal/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/researches/peer-review-journal-article/`,   {
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
            <h4 className="table-header text-left">Journal Based Research</h4>
            <Button className="btn-primary text-right add-btn">
              <Link to="/journalbased" className="text-light">
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
                <th>Publication year</th>
                <th>Journal</th>
                <th>Volume</th>
                <th>Series</th>
                <th>Publisher</th>
                <th>Pages</th>
                <th>ISSN</th>
                <th>Impact factor</th>
                <th>journal index</th> */}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.journal_id}</td>
                  <td>{product.title}</td>

                  {/* <td>{product.author}</td>

                  <td>{product.publication_year}</td>

                  <td>{product.journal}</td>

                  <td>{products.Volume}</td>
                  <td>{product.title}</td>

                  <td>{product.series}</td>

                  <td>{product.publisher}</td>

                  <td>{product.pages}</td>
                  <td>{product.issn}</td>
                  <td>{product.impact_factor}</td>
                  <td>{product.journal_indexing}</td> */}
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
                  <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="light"
                      id="printPageButton"
                      onClick={(e) => viewRow(product.journal_id)}
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
                        deleteHandler(product.journal_id);
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

export default Journal;
