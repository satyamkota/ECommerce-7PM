//import React
//import useEffect hook
import React,{ useEffect } from "react";


//import following hooks
//useSelector
//useDispatch
//useSelector hook used to subscribe the result
//useDispatch hook used to perform the dispatch operation
import { useDispatch,useSelector } from "react-redux";

//import ProductsAction
import { ProductsActions } from "../actions/ProductsActions";

//LoadingBox
import LoadingBox  from "../components/LoadingBox";

//import MessageBox
import MessageBox from "../components/MessageBox";


import Products from "../components/Products";


function HomeScreen(){
    const result = useSelector(state=>state.products);
    const {loading,products,error} = result;
    // console.log(result);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(ProductsActions());
    },[]);
    return(
        <React.Fragment>
           {!loading?(<LoadingBox></LoadingBox>):error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(
                <Products products={products}></Products>
               
           )}
        </React.Fragment>
    )
};

export default HomeScreen;