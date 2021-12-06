import { ADD_ITEM, REMOVE_ITEM } from "../constants/CardConstants";

const initialState = {
    cartItems:[]
}

export const CartReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_ITEM:
            //read data from actions
            const item = action.data;
            //check the item available or not
            const existedItem = state.cartItems.find((element) => {
                return element._id == item._id;
            });
            if(existedItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((element)=>{
                        return element._id == item._id?item:element    //item is already available in the cartItems put as  
                    })
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item] //shirt is not available then as it is shirt update to cartItems
                }
            }
            break;
        case REMOVE_ITEM:
            const id = action.id;
            return{
                ...state,
                cartItems: state.cartItems.filter((element) => {
                    return element._id != id;
                })
            }
        default :
            return state;
    }
}