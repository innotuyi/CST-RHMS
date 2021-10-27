import React from 'react'
import {Table} from 'react-bootstrap'

const $ = require('jquery')

$.Datatable = require('datatables.net')

function Datatable({data}) {
    return (
               
 <Table hover>
 <thead>
   <tr>
     <th>#</th>
     <th>Title</th>
     <th>Start Date</th>
     <th>End Date</th>
     <th>Amount</th>
     <th>Status</th>
     <th>Date Created</th>
   </tr>
 </thead>
 <tbody>
 
  {data.map((research) =>
 
   <tr>
     <td>{research.id}</td>
     <td>{research.research_title}</td>
     <td>{research.starting_date}</td>
     <td>{research.ending_date}</td>
     <td>{research.amount}FRW</td>
     <td>{research.status}</td>
     <td>{research.date_created}</td>
   </tr>
 
  )}
 </tbody>
 </Table>    

    )
}

export default Datatable
