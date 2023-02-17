import axios from "axios";
import constants, { R_FAIL, R_SUCCESS } from '../constants/restconstants.js'
export const RestListAction=()=>async(dispatch)=>{

    try{
        const data= await axios.get('/restaurants.json')
        console.log(data.data.restaurants);
        dispatch({
            type:R_SUCCESS,
            payload:data.data.restaurants
        })
    }
    catch(error){
        dispatch({
            type:R_FAIL,
            error:error
        })
    }
}