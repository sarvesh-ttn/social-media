import { ActionTypes } from "../contents/action-type";
import axios from "../../axios"
export const createPost = ({description,_id})=> async(dispatch)=>{
   
    const response = await axios({
        method:'POST',
        data:{
            desc:description,
            userId:_id
        },
        url:"post/create/"
    })
    console.log('responseeeeee createpost',response);
    dispatch({type:ActionTypes.CREATE_POST,payload:response.data})
}