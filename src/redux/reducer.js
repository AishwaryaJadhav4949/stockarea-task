import * as types from "./actiontype"

const initialState= {
   
    user: {},
    loading: true,
   
}

const usersReducers =(state= initialState, action)=>{
    
 
    switch (action.type) {
    
      
        case types.GET_SINGLE_USER:
            return{
                ...state,
                user: action.payload,
                loading: false
            }   
        case types.UPDATE_USER:
            return{
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}
export default usersReducers;