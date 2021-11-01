// import { LIST_PRODUCTS, LIST_PRODUCTS_FAIL, LIST_PRODUCTS_SUCCESS } from "../constants/ProductsConstant";
import { LIST_PRODUCTS, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_FAIL } from "../constants/ProductsConstants"

const initialState = {
    loading:false,
    products:[],
    error:""
};
export function ProductsReducer(state=initialState,action){
    switch(action.type){
       case LIST_PRODUCTS:
       case LIST_PRODUCTS_SUCCESS:
       case LIST_PRODUCTS_FAIL:
           return{
               ...state,
               loading:action.loading,
               products:action.products,
               error:action.error
           }
        
       default:
           return state;
    }
}