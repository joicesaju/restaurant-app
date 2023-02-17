import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    <Col className='mt-2' sm={12} md={6} lg={4} xl={3}>

   <Link to={`viewrest/${restaurant.id}`} style={{textDecoration:"none",color:"white"}}>
    <Card className='' style={{}}>
      <Card.Img className='p-4,mt-5' variant="top"  src={restaurant.photograph}/>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
       {restaurant.neighborhood}
        </Card.Text>
    

      </Card.Body>
    </Card>
    </Link>
    </Col>
  )
}

export default Restcard
