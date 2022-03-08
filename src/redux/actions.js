import * as types from "./actiontype"
import axios from "axios"


const getUser =(user)=>({
    type: types.GET_SINGLE_USER,
    payload: user,
})
const userUpdated =()=>({
    type: types.UPDATE_USER,
 
})
const api = "http://localhost:4000/details";
const devEnv = process.env.NODE_ENV !== "production";
const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env;

export const getSingleUser= (id)=>{
    return function (dispatch){
        axios.get(`${api}/${id}`).then((resp)=>{
        
            dispatch(getUser(resp.data));
        }).catch(error=> console.log(error))
    }
}
export const  upadateUser = (user, id)=>{
    return function (dispatch){
        axios.put(`${api}/${id}`, user).then((resp)=>{
      console.log("resp", resp)
            dispatch(userUpdated());
        }).catch(error=> console.log(error))
    }
}