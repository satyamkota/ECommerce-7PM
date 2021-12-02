import axios from "axios";
import { DETAILS_LOADING, DETAILS_LOADING_SUCCESS, DETATILS_LOADING_FAIL } from "../constants/DetailsConstant";

const DetailsActions = (id)=>{
    return async (dispatch)=>{
        dispatch({
            type:DETAILS_LOADING,
            loading:false,
            product:{},
            error:""
        })
        try{
            const {data} = await axios.get(`http://localhost:8080/api/products/${id}`);
            dispatch({
                type:DETAILS_LOADING_SUCCESS,
                loading:true,
                product:data,
                error:""
            })
        }catch(err){
            dispatch({
                type:DETATILS_LOADING_FAIL,
                loading:true,
                product:{},
                error:err.message
            })
        }
    }
};

export default DetailsActions;