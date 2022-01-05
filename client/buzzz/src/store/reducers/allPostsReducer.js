import { ActionTypes } from "../contents/action-type";

const initialState ={
    posts:[]
}
 const allPostsReducer =(state=initialState,{type,payload})=>{
     switch (type) {
        
                case ActionTypes.GET_ALL_POSTS:
                    return {...state,posts:payload}
                case ActionTypes.CREATE_POST:
                    return {...state,posts:payload}
         default: return state;
     }
 }
 export default allPostsReducer