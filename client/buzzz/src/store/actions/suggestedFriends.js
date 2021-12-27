import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const suggestedUser = ()=> async(dispatch)=>{
    const response = await axios({
        method:'GET',
        url:'/auth/suggestions/61baf780f588d58a7e1ee2d0'
    })
    dispatch({type:ActionTypes.SUGGESTED_USER,payload:response.data})
};