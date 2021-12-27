import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const getUsers = ()=> async(dispatch)=>{
        const response = await axios({
            method:'GET',
            url:'/user/friends/61baf755f588d58a7e1ee2cd'
        }) 
        
        dispatch({type:ActionTypes.GET_USERS,payload:response.data})

};
