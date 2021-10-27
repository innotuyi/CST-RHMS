import React , {useState, useEffect} from 'react'
import {Col,Button,Table, Row} from 'react-bootstrap'
import HeaderDashborad from '../components/HeaderDashborad'
import {Bar,Line, Pie} from 'react-chartjs-2'
import {} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import AdminDashboard from '../screen/AdminDashboard'
const DashboardAdm = () => {

    const state = {

        labels:["SoICT", "SoARC", "SoSCIE","SoME", "SoGEO", "june"],
        datasets:[
            {
                label:"Rainfall",
                backgroundColor:"rgba(75,192,192,1)",
                borderColor:"rgba(0,0,0,1)",
                borderWidth:2,
                data:[38,29,6,29,10,33,39]
            }
        ]
     }

     const options = {

        plugins:{
            legend:{
                display:true,
                position:"bottom"
            },
            title:{
                text:"Average Rainfall for Month",
                display:true,
                fontsize:20
            }
        }
     }





    const [products, setProduct] =useState([])

    useEffect(() => {
        async function fetchProducts () {
            const {data} = await  axios.get(`https://jsonplaceholder.typicode.com/todos/`)
            setProduct(data)
        }  
        fetchProducts()
    
      }, [])
            
      return (
        <div>
    <HeaderDashborad/>
          <Row>
          <AdminDashboard/> 
          <Col md={8}>  

          <div class="row justify-content-center text-center" style={{
              background:"#F5F8FB", 
             
          }}>
 <div class="col-md-4" style={{
     padding:"1rem"
 }}>
     <div class="card">
         <div class="card-body ">
         <FontAwesomeIcon icon="fa-solid fa-car-bump" />
              <div class="card-text"><h4>Research</h4></div>
              <span><strong>43</strong></span>
              
         </div>
     </div>
 </div>
 <div class="col-md-4" style={{
     padding:"1rem"
 }}>
     <div class="card">
         <div class="card-body ">
         <FontAwesomeIcon icon="fa-solid fa-car-bump" />
              <div class="card-text"><h4>Community</h4></div>
              <span><strong>43</strong></span>
              
         </div>
     </div>
 </div>
 <div class="col-md-4" style={{
     padding:"1rem"
 }}>
     <div class="card">
         <div class="card-body ">
         <FontAwesomeIcon icon="fa-solid fa-car-bump" />
              <div class="card-text"><h4>Mentorship</h4></div>
              <span><strong>43</strong></span>
              
         </div>
     </div>
 </div>
 <div class="col-md-4" style={{
     padding:"1rem"
 }}>
     <div class="card">
         <div class="card-body ">
         <FontAwesomeIcon icon="fa-solid fa-car-bump" />
              <div class="card-text"><h4>Supervison</h4></div>
              <span><strong>43</strong></span>
              
         </div>
     </div>
 </div>
 <div class="col-md-4" style={{
     padding:"1rem"
 }}>
     <div class="card">
         <div class="card-body ">
         <FontAwesomeIcon icon="fa-solid fa-car-bump" />
              <div class="card-text"><h4>Teaching</h4></div>
              <span><strong>43</strong></span>
              
         </div>
     </div>
 </div>
 <div class="col-md-4" style={{
     padding:"1rem"
 }}>
     <div class="card">
         <div class="card-body ">
         <FontAwesomeIcon icon="fa-solid fa-car-bump" />
              <div class="card-text"><h4>Publications</h4></div>
              <span><strong>43</strong></span>
              
         </div>
     </div>
 </div>
 

          </div>

      <div class="row">

          <div class="col-md-6 justify-content-center text-center">
              <Bar data={state}
              options={options}/>
              </div>
              <div class="col-md-6 justify-content-center text-center">
              <Line data={state}
              options={options}/>
              </div>
              <div class="col-md-6 justify-content-center text-center">
              <Pie data={state}
              options={options}/>
              </div>
          
          
          </div>     
             
        </Col>
         </Row>
        </div>
   
           
           
       )
   }
export default DashboardAdm
