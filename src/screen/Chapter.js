import React, {useState, useEffect} from 'react'
import {Col,Button,Table, Row} from 'react-bootstrap'
import axios from 'axios'
import { Link} from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Menu from '../components/Menu'

const Chapter = () => {
    const [products, setProduct] =useState([])
    
      useEffect(() => {
        async function fetchProducts () {
            const {data} = await  axios.get(`http://127.0.0.1:8000/chapter/`)
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
            <h4 className="table-header text-left">Chapter based Research</h4>
              <Button className="btn-primary text-right add-btn"><Link to="/mentoship" className="text-light">Add new</Link></Button>
              </div>
             
     <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Chapter Title</th>
        <th>Author</th>
        <th>Pub year</th>
        <th>Chap Pages</th>
        <th>Place</th>
        <th>Editor</th>
        <th>No of pages</th>
        <th>ISBN</th>
        <th>Reseaarch</th>

      </tr>
    </thead>
    <tbody>
      { products.map ((product) =>
      <tr>
        <td>{product. chap_based_id }</td>
        <td>{product.chapter_title}</td>
    
        <td>{product.author}</td>
    
        <td>{product.publication_year}</td>
    
        <td>{product.book_title}</td>
    
        <td>{product.chap_pages}</td>   
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
    

export default Chapter
