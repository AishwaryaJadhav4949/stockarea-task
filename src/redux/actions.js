import * as types from "./actiontype"
import axios from "axios"


const getUser =(user)=>({
    type: types.GET_SINGLE_USER,
    payload: user,
})
const userUpdated =()=>({
    type: types.UPDATE_USER,
 
})
const api = "https://stockarea-task.herokuapp.com/api";

export const getSingleUser= (id)=>{
    return function (dispatch){
        axios.get(`${api}/details/${id}`).then((resp)=>{
        
            dispatch(getUser(resp.data));
        }).catch(error=> console.log(error))
    }
}
export const  upadateUser = (user, id)=>{
    return function (dispatch){
        axios.put(`${api}/details/${id}`, user).then((resp)=>{
      console.log("resp", resp)
            dispatch(userUpdated());
        }).catch(error=> console.log(error))
    }
}