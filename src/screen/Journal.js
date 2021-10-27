import React, {useState, useEffect} from 'react'
import {Col,Button,Table, Row} from 'react-bootstrap'
import axios from 'axios'
import { Link} from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Menu from '../components/Menu'

const Journal = () => {
    const [products, setProduct] =useState([])
    
      useEffect(() => {
        async function fetchProducts () {
            const {data} = await  axios.get(`http://127.0.0.1:8000/journal/`)
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
            <h4 className="table-header text-left">Journal Based Research</h4>
              <Button className="btn-primary text-right add-btn"><Link to="/mentoship" className="text-light">Add new</Link></Button>
              </div>
             
     <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Author</th>
        <th>Publication year</th>
        <th>Journal</th>
        <th>Volume</th>
        <th>Series</th>
        <th>Publisher</th>
        <th>Pages</th>
        <th>ISSN</th>
        <th>Impact factor</th>
        


        

      </tr>
    </thead>
    <tbody>
      { products.map ((product) =>
      <tr>
        <td>{product.journal_id}</td>
        <td>{product.title}</td>
    
        <td>{product.author}</td>
    
        <td>{product.publication_year}</td>
    
        <td>{product.journal}</td>
    
        <td>{products.Volume}</td> 
        <td>{product.title}</td>
    
        <td>{product.series}</td>
    
        <td>{product.publisher}</td>
    
        <td>{product.pages}</td>  
        <td>{product.issn}</td>   
        <td>{product.impact_factor}</td>   
        <td>{product.owner}</td> 
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
    
export default Journal
