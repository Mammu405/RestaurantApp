import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Restcard from '../Restcard/Restcard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Allrest() {
  const [allresturant,setallresturant]=useState([])
  const fetchData=async()=>{
    const response=await axios('http://localhost:3001/restaurants')
    // console.log(response.data);
    setallresturant(response.data)
  }
  console.log(allresturant);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <Row>
      {
      allresturant.map(item=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <Restcard restaurant={item}/>
        </Col>
      ))
      }
      </Row>
    </div>
  )
}

export default Allrest