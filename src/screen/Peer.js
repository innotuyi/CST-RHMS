import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Col,Button,Table, Row} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Menu from '../components/Menu'

const Peer = () =>{
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
           <Menu/>
           <hr/>
            <Row>
             <Sidebar/> 
            
          <Col md={8}>  
             <div className="text-right m-3">
            <h4 className="table-header text-left">Peers</h4>
              <Button className="btn-primary text-right add-btn"><Link to="/mentoship" className="text-light">Add new</Link></Button>
              </div>
             
     <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name of conference</th>
        <th>Orginizer</th>
        <th>Theme</th>
        <th>Date of publication</th>
        <th>Place</th>
        <th>Editor</th>
        <th>No of pages</th>
        <th>ISBN</th>
        <th>College</th>
        <th>Owner</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      { products.map ((product) =>
      <tr>
        <td>{product.userId}</td>
        <td>{product.id}</td>
    
        <td>{product.title}</td>
    
        <td>{product.completed}</td>
    
        <td>{product.id}</td>
    
        <td>{products.completed}</td>    
        <td>{product.id}</td>
    
    <td>{products.completed}</td> 
    <td>{product.id}</td>
    
    <td>{products.completed}</td> 
    <td>{product.id}</td>
    
    <td>{products.completed}</td> 
      </tr>
      )}
    </tbody>
    </Table>     
    </Col>
          </Row>
         </div>
    
            
            
        )
    }
    
export default Peer
