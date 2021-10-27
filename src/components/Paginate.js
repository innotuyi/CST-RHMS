import React from 'react'
import { Pagination} from 'react-bootstrap'

function Paginate(props) {
 
    return (
        <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>  
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
       
    )
}

export default Paginate
