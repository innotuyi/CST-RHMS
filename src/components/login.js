import React,{useState} from 'react'
import MyNavBar from './nav'
import Image from './images/Group.svg'
import {useHistory} from 'react-router-dom'
import {Container, Col, Form,FormGroup, Label, Input,Button,FormFeedback} from 'reactstrap';
function Login(){
  const history=useHistory()

  const [email,setEmail]=useState({})
  const [password,setPassword]=useState({})

  const onEmailChange=(e)=>{
    var em=e.target.value
    if(em!=""){
      setEmail({value:em})
    }else{
      setEmail({value:em,message:"Write your email"})
    }
  }

  const onPasswordChange=(e)=>{
    var pass=e.target.value
    if(pass!=""){
      setPassword({value:pass})
    }else{
      setPassword({value:pass,message:"Write your password"})
    }
  }

  const handleLogin=(e)=>{
   e.preventDefault()

   if(email.value==null || email.value==""){
     setEmail({message:"Write your email first"})
   }else if(password.value==null || password.value==""){
     setPassword({message:"Write your password"})
   }else{
    history.push("/admin")
   }
  }
    return(
        <div className='root'>
            <MyNavBar/>
            <div className='container mt-3'>

     <div className='row'>

    
       <div className='col-lg-6 col-sm-12' >
           <img src={Image} alt=""  style={{objectFit: "contain",  width:"100%", height:"100%"}} />
       </div>
       <div className='col-lg-6 col-sm-12'  id='login' >
                 <h1 className= "text-center">Login here</h1>
       <Form className="form" method='POST'>
          <Col className='mt-3'>
            <FormGroup>
              <Label>Email</Label>
              <Input invalid={email.message!=null} onChange={onEmailChange} type="email" name="email" placeholder="Enter your Email"/>
              <FormFeedback invalid={email.message!=null}>{email.message}</FormFeedback>
            </FormGroup>
          </Col>

          <Col className='mt-3'>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input invalid={password.message!=null} onChange={onPasswordChange} type="password"name="password"  placeholder="Enter your Password"
              />
            <FormFeedback invalid={password.message!=null}>{password.message}</FormFeedback>
            </FormGroup>
          </Col>

          <Button onClick={handleLogin} className='buttons mt-3' color="primary">Login</Button>

        </Form>
        </div>
       </div>
     </div>
     </div>
    )
}

export default Login