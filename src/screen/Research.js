import React, { useState, useEffect } from 'react'
import {Col,Button,Table, Row} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Menu from '../components/Menu'
import {researchData} from '../research'
import Datatable from '../Datatable'
import Paginate from '../components/Paginate'
import axios from 'axios'

function Research() {

      const [products, setProduct] = useState([])

      useEffect(() =>{

       async function fetchProducts() {
        const {data} =await axios.get('http://127.0.0.1:8000/research/')
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
        <h4 className="table-header text-left">Recent Research</h4>
          <Button className="btn-primary text-right add-btn"><Link to="/research" className="text-light text-left">Add new</Link></Button>
          </div>
   <Datatable   data={products}/>
   <Paginate/>
</Col>
        </Row>
    </div>
      
    )
}

export default Research
