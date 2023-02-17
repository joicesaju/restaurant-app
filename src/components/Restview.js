
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restview({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
  return (
   review.map((item)=>(
    <Card style={{ width: '18rem' ,marginTop:"20px",marginRight:"40px",float:"right"}}>
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
      <Card.Text>
  {item.rating}
      </Card.Text>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         {item.comments}
        </div>
      </Collapse>
    </Card.Body>
  </Card>
   ))
  )
}

export default Restview
