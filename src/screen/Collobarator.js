import React, { useState, useEffect } from "react";
import { Col, Button, Table, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Menu from "../components/Menu";

const Collobarator = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/d`
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
            <h4 className="table-header text-left">Collaborators</h4>
            {/* <Button className="btn-primary text-right add-btn"><Link to="/mentoship" className="text-light">Add new</Link></Button> */}
          </div>

          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Area</th>
                <th>Departement</th>
                <th>Activity</th>
                <th>Output</th>
                <th>Engegement</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.userId}</td>
                  <td>{product.id}</td>

                  <td>{product.title}</td>

                  <td>{product.completed}</td>

                  <td>{product.id}</td>

                  <td>{products.completed}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Collobarator;
