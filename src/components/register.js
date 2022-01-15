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
  const [firstname, setFirstname] = useState({});
  const [lastname, setLast] = useState({});
  const [depart, setDepart] = useState({});
  const [rank, setRank] = useState({});
  const [resp, setResponsibility] = useState({});
  const [gender, setGender] = useState({});
  const [school, setSchool] = useState({});
  const [email, setEmail] = useState({});
  const [username, setName] = useState({});
  const [password, setPassword] = useState({});
  const [confirm, setConfirm] = useState({});

  const onEmailChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setEmail({ value: em });
    } else {
      setEmail({ value: em, message: "Write your email" });
    }
  };

  const onUserChange = (e) => {
    var username = e.target.value;
    if (depart != "") {
      setName({ value: username });
    } else {
      setName({ value: username, message: "Write username" });
    }
  };
  const onDepartChange = (e) => {
    var depart = e.target.value;
    if (depart != "") {
      setDepart({ value: depart });
    } else {
      setDepart({ value: depart, message: "select your department name" });
    }
  };

  const onResponsibilityChange = (e) => {
    var resp = e.target.value;
    if (resp != "") {
      setResponsibility({ value: resp });
    } else {
      setResponsibility({
        value: resp,
        message: "Write your Responsibilities",
      });
    }
  };
  const onRankChange = (e) => {
    var rank = e.target.value;
    if (rank != "") {
      setRank({ value: rank });
    } else {
      setRank({ value: rank, message: "select your academic rank name" });
    }
  };

  const onGenderChange = (e) => {
    var gender = e.target.value;
    if (gender != "") {
      setGender({ value: gender });
    } else {
      setGender({ value: gender, message: "select your gender" });
    }
  };
  const onSchoolChange = (e) => {
    var school = e.target.value;
    if (school != "") {
      setSchool({ value: school });
    } else {
      setSchool({ value: school, message: "select your school name" });
    }
  };

  const onFirstnameChange = (e) => {
    var name = e.target.value;
    if (name != "") {
      setFirstname({ value: name });
    } else {
      setFirstname({ value: name, message: "Write your first name" });
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
  const onLastChange = (e) => {
    var name = e.target.value;
    if (name != "") {
      setLast({ value: name });
    } else {
      setLast({ value: name, message: "Write your last name" });
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

    if (firstname.value == null || firstname.value == "") {
      setName({ message: "Write your first name" });
    } else if (lastname.value == null || lastname.value == "") {
      setLast({ message: "Write your last name" });
    } else if (gender.value == "Select gender" || gender.value == undefined) {
      setGender({ message: "select your gender first" });
    } else if (school.value == "Select school" || school.value == undefined) {
      setSchool({ message: "select your school name first" });
    } else if (
      depart.value == "Select department" ||
      depart.value == undefined
    ) {
      onDepartChange({ message: "select your department name first" });
    } else if (
      rank.value == "Select academic rank" ||
      rank.value == undefined
    ) {
      setRank({ message: "select your academic rank first" });
    } else if (email.value == null || email.value == "") {
      setEmail({ message: "Write your email first" });
    } else if (!email.value.includes("@")) {
      setEmail({ message: "Please include '@' " });
    } else if (username.value == null || username.value == "") {
      setName({ message: "Write your username" });
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
        first_name: firstname.value,
        last_name: lastname.value,
        gender: gender.value,
        school_name: school.value,
        departement: depart.value,
        academic_rank: rank.value,
        responsibilities: resp.value,
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
      history.push("/login", payload);
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
                  <Label>First Name</Label>
                  <Input
                    invalid={firstname.message != null}
                    onChange={onFirstnameChange}
                    type="text"
                    name="firstname"
                    placeholder="Enter your first name"
                  />
                  <FormFeedback invalid={firstname.message != null}>
                    {firstname.message}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    invalid={lastname.message != null}
                    onChange={onLastChange}
                    type="text"
                    name="text"
                    placeholder="Enter your last name"
                  />
                  <FormFeedback invalid={lastname.message != null}>
                    {lastname.message}
                  </FormFeedback>
                </FormGroup>
                <FormGroup></FormGroup>
                <FormGroup>
                  <Label for="gender">Gender</Label>
                  <Input
                    invalid={gender.message != null}
                    type="select"
                    name="gender"
                    as="Select"
                    onChange={onGenderChange}
                  >
                    <option>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Input>
                  <FormFeedback invalid={gender.message != null}>
                    {gender.message}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="school">School Name</Label>
                  <Input
                    invalid={school.message != null}
                    type="select"
                    name="School"
                    placeholder="Select your school name"
                    onChange={onSchoolChange}
                  >
                    <option>Select school</option>
                    <option>
                      School of Information and Communication Technology-SOICT
                    </option>
                    <option>
                      School of Architecture and the Built Environment - SABE
                    </option>
                    <option>School of Engineering-SOE</option>
                    <option>School of Mining and Geology-SMG</option>
                    <option>School of Science-SOS</option>
                  </Input>
                  <FormFeedback invalid={school.message != null}>
                    {school.message}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="">Department</Label>
                  <Input
                    invalid={depart.message != null}
                    type="select"
                    name="depart"
                    placeholder="Select your department"
                    onChange={onDepartChange}
                  >
                    <option>Select department</option>
                    <option>
                      Departement of Computer and Software Enginnering
                    </option>
                    <option>Departement of Computer Science</option>
                    <option>Departement of Information System</option>
                    <option>Departement of Information Technology</option>
                    <option>Department of Architecture</option>
                    <option>Department of Construction Management</option>
                    <option>
                      Department of Estate Management and Valuation
                    </option>
                  </Input>
                  <FormFeedback invalid={depart.message != null}>
                    {depart.message}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label>Responsibilities</Label>
                  <Input
                    invalid={resp.message}
                    type="text"
                    name="text"
                    placeholder="Enter responsibilities"
                    onChange={onResponsibilityChange}
                  />
                  <FormFeedback invalid={resp.message != null}>
                    {resp.message}
                  </FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="Select">Academic Rank</Label>
                  <Input
                    invalid={rank.message}
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={onRankChange}
                  >
                    <option>Select academic rank</option>
                    <option>Associated Proffessor</option>
                    <option>Researcher</option>
                    <option>Lecture</option>
                    <option>Assistant Researcher</option>
                    <option>Senior_Lecturer</option>
                    <option>Assistant Lecturer</option>
                    <option>Tutorial Assistant</option>
                  </Input>
                  <FormFeedback invalid={rank.message != null}>
                    {rank.message}
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
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    invalid={username.message != null}
                    onChange={onUserChange}
                    type="text"
                    name="username"
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
