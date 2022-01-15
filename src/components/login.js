import React, { useState, useEffect } from "react";
import axios from "axios";
import MyNavBar from "./nav";
import Image from "./images/Group.svg";
import { useHistory } from "react-router-dom";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
function Login() {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [alert, setAlert] = useState(false);

  const onUserChange = (e) => {
    var us = e.target.value;
    if (us != "") {
      setUser({ value: us });
    } else {
      setUser({ value: us, message: "Select Your Role First" });
    }
  };

  const onEmailChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setEmail({ value: em });
    } else {
      setEmail({ value: em, message: "Write your email" });
    }
  };

  const onPasswordChange = (e) => {
    var pass = e.target.value;
    if (pass != "") {
      setPassword({ value: pass });
    } else {
      setPassword({ value: pass, message: "Write your password" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.value == null || user.value == "") {
      setUser({ message: "Select Your Role First" });
    } else if (!email.value.includes("@")) {
      setEmail({ message: "Please Include '@'" });
    } else if (!email.value.includes("@")) {
      setEmail({ message: "Please Include '@'" });
    } else if (password.value == null || password.value == "") {
      setPassword({ message: "Write your password" });
    } else {
      const payload = {
        user: user.value,
        email: email.value,
        password: password.value,
      };

      if (user.value == "staff") {
        axios
          .post("http://127.0.0.1:8000/auth/login/", payload)
          .then(function (response) {
            localStorage.setItem("token", response.data.tokens.access);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("firstname", response.data.firstname);
            setRedirect(true);
          })
          .catch(function (error) {
            console.log("Error response: ", error);
            history.push("/login");
            setAlert(true);
          });
        if (redirect) {
          history.push("/Dash");
          window.location.reload();
        } else {
          history.push("/login");
        }
      } else if (user.value == "manager") {
        axios
          .post("http://127.0.0.1:8000/auth/research-manage-login/", payload)
          .then(function (response) {
            localStorage.setItem("token", response.data.tokens.access);
            localStorage.setItem("email", response.data.email);
            setRedirect(true);
          })
          .catch(function (error) {
            console.log("Error response: ", error);
            history.push("/login");
            setAlert(true);
          });
        if (redirect) {
          history.push("/admin");
          // window.location.reload();
        } else {
          history.push("/login");
        }
      } else {
        history.push("/");
      }
    }
  };

  return (
    <div className="root">
      <MyNavBar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img
              src={Image}
              alt=""
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-lg-6 col-sm-12" id="login">
            <h1 className="text-center">Login here</h1>

            <h3
              style={{
                color: "red",
              }}
            >
              {alert ? "username or Password is wrong" : ""}
            </h3>

            <Form
              className="form"
              method="POST"
              style={{
                marginBottom: "5rem",
              }}
            >
              <Col className="mt-3">
                <FormGroup>
                  <Label for="">User Role</Label>
                  <Input
                    invalid={user.message != null}
                    type="select"
                    name="user"
                    placeholder="Select your role"
                    onChange={onUserChange}
                  >
                    <option>Select Role</option>
                    <option value="staff">Staff</option>
                    <option value="manager">Research Manager</option>
                  </Input>
                  <FormFeedback invalid={user.message != null}>
                    {user.message}
                  </FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    invalid={email.message != null}
                    onChange={onEmailChange}
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <FormFeedback invalid={email.message != null}>
                    {email.message}
                  </FormFeedback>
                </FormGroup>
              </Col>

              <Col className="mt-3">
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    invalid={password.message != null}
                    onChange={onPasswordChange}
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                  />
                  <FormFeedback invalid={password.message != null}>
                    {password.message}
                  </FormFeedback>
                </FormGroup>
              </Col>

              <Col className="mt-3">
                <FormGroup>
                  <FormFeedback invalid={alert.message != null}>
                    {alert.message}
                  </FormFeedback>
                </FormGroup>
              </Col>

              <Button
                onClick={handleLogin}
                className="buttons mt-3"
                color="primary"
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
