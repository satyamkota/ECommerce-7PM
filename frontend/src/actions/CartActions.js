import axios from "axios";
import { ADD_ITEM, REMOVE_ITEM } from "../constants/CardConstants";

export const addToCart = (id,qty)=>{
     //connnect to reducer
     return async (dispatch,getState)=>{
        try {
            const {data} = await axios.get(`http://localhost:8080/api/products/${id}`)
            //send response(data) to reducer
            dispatch({
                type: ADD_ITEM,
                data:{
                    "_id":data._id,
                    "name":data.name,
                    "brand":data.brand,
                    "rating":data.rating,
                    "numReviews":data.numReviews,
                    "image":data.image,
                    "description":data.description,
                    "cost":data.cost,
                    "countInStock":data.countInStock,
                    qty    //afat from server data we need to send qty also
                }
            })
            window.localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
        }catch (err) {
            console.log(err); 
        }
     }
}


export const removeItemCart = (id) => {
    return(dispatch,getState)=>{
        dispatch({
            type: REMOVE_ITEM,
            id: id
        })
    }
}
