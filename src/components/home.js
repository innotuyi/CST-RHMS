import React, { useState } from "react";
import MyNavBar from "./nav";
import Image from "./images/Group.svg";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

function HomePage() {
  return (
    <div className="root">
      <MyNavBar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "90%",
              }}
            >
              To support the development of Rwanda by discovering and advancing
              knowledge, committed to the highest standards of academic
              excellence , where students are prepared for lives of service,
              leadership and solutions..
              <div style={{ display: "flex-end", marginTop: 20 }}>
                <Button
                  href="/login"
                  className="buttons"
                  color="primary"
                  style={{ marginRight: 20 }}
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  href="/register"
                  className="buttons"
                  color="primary"
                  style={{ marginLeft: 20 }}
                >
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <img
              src={Image}
              alt=""
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
