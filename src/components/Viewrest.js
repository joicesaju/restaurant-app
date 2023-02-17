import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import  Image  from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restview from './Restview';

function Viewrest() {

    const urlParams= useParams()
    console.log(urlParams.id);

    const[restaurantlist,setRestaurantlist]= useState([])

    const getRestaurant=async()=>{
        await fetch('/restaurants.json')
        .then((data)=>
          data.json().then((result)=>setRestaurantlist(result.restaurants))
        )
      }
  console.log(restaurantlist);
     useEffect(()=>{
      getRestaurant()
     },[])

     const viewrest= restaurantlist.find(item=>item.id==urlParams.id)
    console.log(viewrest);
  return (
    <div>
    {
        viewrest?(
         <Row style={{padding:"15px"}}>
            <Col>
        <Image  src={viewrest.photograph} style={{width:"600px",height:"400px"}} fluid/>
            </Col>
            <Col md={8}>
            <h2>{viewrest.name}</h2>
            <ListGroup>
      <ListGroup.Item variant="light">Name:{viewrest.name}</ListGroup.Item>
      <ListGroup.Item variant="light">Address:{viewrest.address}</ListGroup.Item>
      <ListGroup.Item variant="light">Cuisine-type:{viewrest.cuisine_type}</ListGroup.Item>
      <ListGroup.Item variant="light">Neighborhood:{viewrest.neighborhood}</ListGroup.Item>
      
     
    </ListGroup>

    <><Restop op={viewrest.operating_hours} /></>
      <><Restview review={viewrest.reviews}/></>


            </Col>
         </Row>
  ):'null'
    }
    </div>
  )
}

export default Viewrest
