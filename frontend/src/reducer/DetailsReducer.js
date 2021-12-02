import { DETAILS_LOADING, DETAILS_LOADING_SUCCESS, DETATILS_LOADING_FAIL } from "../constants/DetailsConstant";

const initialState = {
    loading:false,
    product:{},
    error:""
}

const DetailsReducer = (state=initialState,action)=>{
    switch(action.type){
        case DETAILS_LOADING:
        case DETAILS_LOADING_SUCCESS:
        case DETATILS_LOADING_FAIL:
            return{
                ...state,
                loading:action.loading,
                product:action.product,
                error:action.error
            }
        default:
            return state;
    }
};

export default DetailsReducer;