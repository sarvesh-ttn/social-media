import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const getUsers = ()=> async(dispatch)=>{
        const response = await axios({
            method:'GET',
            url:'/user/all'
        }) 
        // const user = await axios({
        //     method:'GET',
        //     url:'/user'
        // }) 
        // console.log(user);
        dispatch({type:ActionTypes.GET_USERS,payload:response.data})
        // dispatch({type:ActionTypes.GET_USER,payload:user.data})
};
