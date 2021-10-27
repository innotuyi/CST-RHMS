import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Col,Button,Table, Row} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Menu from '../components/Menu'

const Book = () =>  {
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
            <h4 className="table-header text-left">Book based Research</h4>
              <Button className="btn-primary text-right add-btn"><Link to="/mentoship" className="text-light">Add new</Link></Button>
              </div>
             
     <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Author</th>
        <th>Publication Year</th>
        <th>Editor</th>
        <th>Publiser</th>
        <th>Place</th>
        <th>Pages</th>
        <th>ISBN</th>
        <th>Research</th>
      </tr>
    </thead>
    <tbody>
      { products.map ((product) =>
      <tr>
        <td>{product.bookbased_id}</td>
        <td>{product.title}</td>
        <td>{product.author}</td>
        <td>{product.publication_year}</td>
        <td>{product.editor}</td>
         <td>{products.publisher}</td> 
        <td>{product.place}</td>
        <td>{product.pages}</td>
        <td>{products.isbn}</td> 
        <td>{products.research}</td>    
      </tr>
      )}
    </tbody>
    </Table>     
    </Col>
          </Row>
         </div>
    
            
            
        )
    }
    
export default Book
