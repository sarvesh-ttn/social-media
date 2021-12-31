import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const getAllPosts= (loggedUserId)=> async(dispatch)=>{

        const response = await axios({
            method:'GET',
            url:`/post/allPosts/${loggedUserId}`
        }) 
      
        dispatch({type:ActionTypes.GET_ALL_POSTS,payload:response.data})

};