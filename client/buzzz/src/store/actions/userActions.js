import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const getUsers = (id)=> async(dispatch)=>{
   
        const response = await axios({
            method:'GET',
            url:`/user/friends/${id}`
        }) 
      
        dispatch({type:ActionTypes.GET_FRIENDS,payload:response.data})

};
