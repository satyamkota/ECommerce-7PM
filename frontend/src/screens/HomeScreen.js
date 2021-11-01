import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ProductsActions } from '../actions/ProductsActions';


function HomeScreen() {
    const result = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ProductsActions())
    },[]);
    return (
        <React.Fragment>
            <h1>{JSON.stringify(result)}</h1>
        </React.Fragment>
    )
}

export default HomeScreen;
