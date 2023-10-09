import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Restcard({restaurant}) {
  return (
    <div>
        <Link to={`/view/${restaurant.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Title>
            Address :{restaurant.address}
            Neighborhood :{restaurant.neighborhood}
            cusine type :{restaurant.cuisine_type}
        </Card.Title>
    
      </Card.Body>
    </Card>
        </Link>
      
    </div>
  )
}

export default Restcard