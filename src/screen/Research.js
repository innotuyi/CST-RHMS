import React, { useState, useEffect } from "react";
import { Col, Button, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Menu from "../components/Menu";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { researchData } from "../research";
import Datatable from "../Datatable";
import Paginate from "../components/Paginate";
import axios from "axios";
import { useHistory } from "react-router-dom";
let token = localStorage.getItem("token");
function Research() {
  const history = useHistory();
  console.log(token);

  const [researches, setProduct] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this research?")) {
      axios
        .delete(`http://127.0.0.1:8000/researches/research-project/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          ToastsStore.warning("Successfully Deleted!");
          window.location.reload();
        })
        .catch(function (error) {
          console.log("Error response: ", error);
        });
    }
  };

  const viewRow = (id) => {
    history.push(`/SingleResearch/${id}`);
  };

  const showEditForm = (id) => {
    history.push(`/EditResearch/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/researches/research-project/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(token);
      setProduct(data);
    }

    fetchProducts();

    // if (window.confirm('Are you sure you want to delete this research?')) {
    //  axios.delete(`http://127.0.0.1:8000/researches/research-project/${id}/`)
    //   .then(res => {
    //     ToastsStore.warning('Successfully Deleted!');
    // }).catch(function (error) {
    //   console.log("Error response: ", error);
    // });
  }, []);

  return (
    <div>
      <Menu />
      <hr />
      <Row>
        <Sidebar />
        <Col md={8}>
          <div className="text-right m-3">
            <h4 className="table-header text-left">Recent Research</h4>
            <Button className="btn-primary text-right add-btn">
              <Link to="/research" className="text-light text-left">
                Add new
              </Link>
            </Button>
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                {/* <th>Start date</th>
                <th>End date</th> */}
                {/* <th>Funding</th>
                <th>status</th> */}
              </tr>
            </thead>
            <tbody>
              {researches.map((research) => (
                <tr>
                  <td>{research.id}</td>
                  <td>
                    <Link
                      to={`/SingleResearch/${research.id}`}
                      style={{
                        color: "black",
                      }}
                    >
                      {research.research_title}
                    </Link>{" "}
                  </td>
                  {/* <td>{research.starting_date}</td>
                  <td>{research.ending_date}</td> */}
                  {/* <td>{research.funding_amount}</td>
                  <td>{research.status}</td> */}
                  <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="dark"
                      id="printPageButton"
                      onClick={(e) => showEditForm(research.id)}
                    >
                      <i className="fa fa-pencil"></i>
                    </Button>
                  </td>
                  {/* <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="light"
                      id="printPageButton"
                      onClick={(e) => viewRow(research.id)}
                    >
                      <i class="fa fa-eye"></i>
                    </Button>
                  </td> */}
                  <td>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <Button
                      variant="light"
                      id="printPageButton"
                      onClick={() => {
                        deleteHandler(research.id);
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

export default Research;
