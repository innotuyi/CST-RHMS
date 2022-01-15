import React, { useState, useEffect } from "react";
import { Col, Button, Table, Row } from "react-bootstrap";
import HeaderDashborad from "../components/HeaderDashborad";
import { Link} from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";

import AdminDashboard from "../screen/AdminDashboard";

import { useHistory } from "react-router-dom";
let token = localStorage.getItem("token");

const ReasearchAdmin = () => {

    
  const history = useHistory();
  console.log(token);

  const [researches, setProduct] = useState([]);
  const showEditForm = (id) => {
    history.push(`/EditResearchAdmin/${id}/`);
  };

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/admin-statistic/all-research-project/",{
          headers: {
            'Authorization': `Bearer ${token}` 
          }
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
      <AdminDashboard />
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
                  <td>{research.research_title}</td>
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
    
                </tr>
              ))}
            </tbody>
          </Table>
        
        </Col>
      </Row>
    </div>
  );
};

export default ReasearchAdmin;
