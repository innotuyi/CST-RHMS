import React, { useState } from "react";
import MyNavBar from "./nav";
import Image from "./images/Group.svg";
import axios from "axios";

import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";

import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onEmailChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setEmail({ value: em });
    } else {
      setEmail({ value: em, message: "Write your email" });
    }
  };

  const onUserChange = (e) => {
    var name = e.target.value;
    if (name != "") {
      setName({ value: name });
    } else {
      setName({ value: name, message: "Write your first name" });
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

  const onConfirmChange = (e) => {
    var pass = e.target.value;
    if (pass != "") {
      setConfirm({ value: pass });
    } else {
      setConfirm({ value: pass, message: "Confirm your password" });
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (username.value == null || username.value == "") {
      setName({ message: "Write your username" });
    } else if (email.value == null || email.value == "") {
      setEmail({ message: "Write your email first" });
    } else if (password.value == null || password.value == "") {
      setPassword({ message: "Write your password" });
    } else if (password.value.length < 6) {
      setPassword({ message: "Your password is too short" });
    } else if (confirm.value == null || password.value == "") {
      setConfirm({ message: "Confirm your password" });
    } else if (confirm.value != password.value) {
      setConfirm({ message: "Your password doesn't match" });
    } else {
      const payload = {
        email: email.value,
        password: password.value,
        username: username.value,
      };
      console.log(payload);

      axios
        .post("http://127.0.0.1:8000/auth/register/", payload)
        .then(function (response) {
          console.log("Successful response: ", response);
        })
        .catch(function (error) {
          console.log("Error response: ", error);
        });
      history.push("/continue", payload);
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
              style={{ objectFit: "contain", width: "80%", height: "80%" }}
            />
          </div>
          <div className="col-lg-6 col-sm-12" id="div">
            <h1>Registration</h1>
            <Form className="form">
              <Col>
                <FormGroup>
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

                  <Label>Username</Label>
                  <Input
                    invalid={username.message != null}
                    onChange={onUserChange}
                    type="text"
                    name="text"
                    placeholder="Enter your username"
                  />
                  <FormFeedback invalid={username.message != null}>
                    {username.message}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col>
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
                <FormGroup>
                  <Label for="Password">Comfirm Password</Label>
                  <Input
                    invalid={confirm.message != null}
                    onChange={onConfirmChange}
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                  />
                  <FormFeedback invalid={confirm.message != null}>
                    {confirm.message}
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Button
                onClick={handleContinue}
                className="buttons mt-3"
                color="primary"
              >
                Continue
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
