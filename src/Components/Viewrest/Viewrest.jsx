import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../Restop/Restop';
import Restreview from '../Restreview/Restreview';
function Viewrest() {
    // // get path parameter
    // const pathParameter =useParams()
    // console.log(pathParameter); //id=2 object
    // console.log(pathParameter.id); //2
    
    //destructure parameter
    const {id}=useParams()
    console.log(id);//2

    const [RestDetails,setRestDetails]=useState({})
    //api call for particluar restaurat details
    const fetchData=async()=>{
        const response =await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(response.data); //object particular rest details
        setRestDetails(response.data)
    }
    console.log(RestDetails);
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        <Row>
            <Col>
            {/* image */}
            <img src={`${RestDetails.photograph}`} alt="" style={{width:'400px',margin:'20px',borderRadius:'20px'}}/>
            </Col>
            <Col style={{marginTop:'200px'}}>
            {/* content */}
            <ListGroup>
      <ListGroup.Item>Name :{RestDetails.name}</ListGroup.Item>
      <ListGroup.Item>Address :{RestDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type :{RestDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood :{RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><Restop op={RestDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Restreview rev={RestDetails.reviews}/></ListGroup.Item>
    </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default Viewrest