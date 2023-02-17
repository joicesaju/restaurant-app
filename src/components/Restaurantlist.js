import React from 'react'
import {useState} from 'react'
import{useEffect} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restactionlist';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    const[restaurantlist,setRestaurantlist]= useState([])

    // const getRestaurant=async()=>{
    //   await fetch('/restaurants.json')
    //   .then((data)=>
    //     data.json().then((result)=>setRestaurantlist(result.restaurants))
    //   )
    // }


console.log(restaurantlist);

const dispatch = useDispatch()

const result= useSelector(state=>state.restReducer)
console.log(result);

   useEffect(()=>{
   dispatch(RestListAction(

   ))
   },[])
   
 

  return (
    <Row>
     {
       
             result.restList.map((item)=>(
                <Restcard restaurant ={item}/>
                // <h4>{item.name}</h4>
               ))
         }
    
    </Row>
  )
}

export default Restaurantlist
