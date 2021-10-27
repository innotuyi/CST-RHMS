
import React, {useState, useEffect} from 'react'
import {Col,Button,Table, Row} from 'react-bootstrap'
import axios from 'axios'
import { Link} from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Menu from '../components/Menu'
const Conference = () => {
    const [products, setProduct] =useState([])
    
      useEffect(() => {
        async function fetchProducts () {
            const {data} = await  axios.get(`http://127.0.0.1:8000/conference/`)
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
            <h4 className="table-header text-left">Conference</h4>
              <Button className="btn-primary text-right add-btn"><Link to="/mentoship" className="text-light">Add new</Link></Button>
              </div>
             
     <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Author</th>
        <th>Date</th>
        <th>Theme</th>
        <th>Place</th>
        <th>Editor</th>
        <th>No of pages</th>
        <th>ISBN</th>
        <th>Reearch</th>
        

        

      </tr>
    </thead>
    <tbody>
      { products.map ((product) =>
      <tr>
        <td>{product.confer_id}</td>
        <td>{product.confer_name}</td>
    
        <td>{product.author}</td>
    
        <td>{product.date}</td>
    
        <td>{product.theme}</td>
    
        <td>{product.place}</td>  
        <td>{product.editor}</td> 
        <td>{product.no_of_pages}</td> 
        <td>{product.ISBN}</td> 
        <td>{product.research}</td>     
      </tr>
      )}
    </tbody>
    </Table>     
    </Col>
          </Row>
         </div>
    
            
            
        )
    }
    

export default Conference
