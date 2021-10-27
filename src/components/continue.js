import React, { useState, useEffect } from 'react'
import MyNavBar from './nav'
import Image from './images/Group.svg'
import { Container, Col, Form, FormGroup, Label, Input, Button, Row, FormFeedback } from 'reactstrap'
import { useHistory } from 'react-router-dom'
function Register(props) {

    const history = useHistory()

    const [firstname, setName] = useState({})
    const [lastname, setLast] = useState({})
    const [gender, setGender] = useState({})
    const [school, setSchool] = useState({})
    const [depart, setDepartment] = useState({})
    const [rank, setRank] = useState({})
    const [date, setDate] = useState({})
    const [proDate, setproDate] = useState({})
    const [specialization, setSpecialization] = useState({})
    const [resp, setResponsibility] = useState({})
    const [train, setTrainings] = useState({})

    useEffect(() => {

        const data = history.location.state

        if (data == null || data == undefined) {
            history.goBack()
            return
        }


    }, [])

    const onNameChange = (e) => {
        var name = e.target.value
        if (name != "") {
            setName({ value: name })
        } else {
            setName({ value: name, message: "Write your first name" })
        }
    }


    const onLastChange = (e) => {
        var name = e.target.value
        if (name != "") {
            setLast({ value: name })
        } else {
            setLast({ value: name, message: "Write your last name" })
        }
    }

    const onGenderChange = (e) => {
        var gender = e.target.value
        if (gender != "") {
            setGender({ value: gender })
        } else {
            setGender({ value: gender, message: "select your gender" })
        }
    }

    const onSchoolChange = (e) => {
        var school = e.target.value
        if (school != "") {
            setSchool({ value: school })
        } else {
            setSchool({ value: school, message: "select your school name" })
        }
    }

    const onDepartChange = (e) => {
        var depart = e.target.value
        if (depart != "") {
            setDepartment({ value: depart })
        } else {
            setDepartment({ value: depart, message: "select your department name" })
        }
    }

    const onRankChange = (e) => {
        var rank = e.target.value
        if (rank != "") {
            setRank({ value: rank })
        } else {
            setRank({ value: rank, message: "select your academic rank name" })
        }
    }

    const onDateChange = (e) => {
        var date = e.target.value
        if (date != "") {
            setDate({ value: date })
        } else {
            setDate({ value: date, message: "select your appointment date" })
        }
    }

    const onProDateChange = (e) => {
        var proDate = e.target.value
        if (proDate != "") {
            setproDate({ value: proDate })
        } else {
            setproDate({ value: proDate, message: "select your promotion date" })
        }
    }

    const onSpecializationChange = (e) => {
        var specialization = e.target.value
        if (specialization != "") {
            setSpecialization({ value: specialization })
        } else {
            setSpecialization({ value: specialization, message: "Write your specialization" })
        }
    }

    const onResponsibilityChange = (e) => {
        var resp = e.target.value
        if (resp != "") {
            setResponsibility({ value: resp })
        } else {
            setResponsibility({ value: resp, message: "Write your Responsibilities" })
        }
    }

    const onTrainingChange = (e) => {
        var train = e.target.value
        if (train != "") {
            setTrainings({ value: train })
        } else {
            setTrainings({ value: train, message: "Write your Trainings" })
        }
    }

    const register = (e) => {

        e.preventDefault()
        if (firstname.value == null || firstname.value == "") {
            setName({ message: "Write your first namet" })
        } else if (lastname.value == null || lastname.value == "") {
            setLast({ message: "Write your last name" })
        }
        else if (gender.value == 'Select gender' || gender.value == undefined) {
            setGender({ message: "select your gender first" })
        } else if (school.value == 'Select school' || school.value == undefined) {
            setSchool({ message: "select your school name first" })
        } else if (depart.value == 'Select department' || depart.value == undefined) {
            setDepartment({ message: "select your department name first" })
        } else if (rank.value == 'Select academic rank' || rank.value == undefined) {
            setRank({ message: "select your academic rank first" })
        } else if (date.value == null || date.value == "") {
            setDate({ message: "Select your  appointment date first" })
        } else if (proDate.value == null || proDate.value == "") {
            setproDate({ message: "Select your  promotion date first" })
        } else if (specialization.value == null || specialization.value == "") {
            setSpecialization({ message: "write your  spacialization first" })
        } else if (resp.value == null || resp.value == "") {
            setResponsibility({ message: "write your  responsibilities first" })
        } else if (train.value == null || train.value == "") {
            setTrainings({ message: "write trainings you attended" })
        } else {

        }
    }
    return (
        <div className='root'>
            <MyNavBar />

            <div className='container mt-3'>

                <div className='row'>


                    <div className='col-lg-6 col-sm-12'>
                        <img src={Image} alt="" style={{ objectFit: "contain", width: "80%", height: "80%" }} />
                    </div>
                    <div className='col-lg-6 col-sm-12' id='div' >
                        <h1>Continue registration</h1>
                        <Form className="form" method='POST'>
                            <Col>
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input invalid={firstname.message != null} onChange={onNameChange} type="text" name="text" placeholder="Enter your first name" />
                                    <FormFeedback invalid={firstname.message != null}>{firstname.message}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input invalid={lastname.message != null} onChange={onLastChange} type="text" name="text" placeholder="Enter your last name" />
                                    <FormFeedback invalid={lastname.message != null}>{lastname.message}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Input invalid={gender.message != null} type="select" name="gender" as="Select" onChange={onGenderChange}>
                                        <option>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                    <FormFeedback invalid={gender.message != null}>{gender.message}</FormFeedback>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="school">School Name</Label>
                                                <Input invalid={school.message != null} type="select" name="School" placeholder="Select your school name" onChange={onSchoolChange}>
                                                    <option>Select school</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                                <FormFeedback invalid={school.message != null}>{school.message}</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                        {' '}
                                        <Col>
                                            <FormGroup>
                                                <Label for="">Department</Label>
                                                <Input invalid={depart.message != null} type="select" name="select" placeholder="Select your department" onChange={onDepartChange}>
                                                    <option>Select department</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                                <FormFeedback invalid={depart.message != null}>{depart.message}</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="Select">Academic Rank</Label>
                                        <Input invalid={rank.message} type="select" name="select" id="exampleSelect" onChange={onRankChange}>
                                            <option>Select academic rank</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                        <FormFeedback invalid={rank.message != null}>{rank.message}</FormFeedback>
                                    </FormGroup>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="exampleDate">Appointment Date</Label>
                                                <Input invalid={date.message != null} type="date" name="date" id="exampleDate" placeholder="date placeholder" onChange={onDateChange}
                                                />
                                                <FormFeedback invalid={date.message != null}>{date.message}</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="exampleDate">Promotion Date</Label>
                                                <Input invalid={proDate.message != null}
                                                    type="date"
                                                    name="date"
                                                    id="exampleDate"
                                                    placeholder="date placeholder"
                                                    onChange={onProDateChange}
                                                />
                                                <FormFeedback invalid={proDate.message != null}>{proDate.message}</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Label>Specialized in</Label>
                                    <Input invalid={specialization.message} type="text" name="text" placeholder="Enter your area of specialization" onChange={onSpecializationChange} />
                                    <FormFeedback invalid={specialization.message != null}>{specialization.message}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Responsibilities</Label>
                                    <Input invalid={resp.message} type="text" name="text" placeholder="Enter responsibilities" onChange={onResponsibilityChange} />
                                    <FormFeedback invalid={resp.message != null}>{resp.message}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Trainings</Label>
                                    <Input invalid={train.message} type="text" name="text" placeholder="Trainings you attended" onChange={onTrainingChange} />
                                    <FormFeedback invalid={train.message != null}>{train.message}</FormFeedback>
                                </FormGroup>
                                <Button className='buttons mt-3' color="primary" onClick={register}>Register</Button>

                            </Col>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register