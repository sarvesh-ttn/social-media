import { ActionTypes } from "../contents/action-type";

const initialState ={
    users:[]
}
 const userReducer =(state=initialState,{type,payload})=>{
     switch (type) {
         case ActionTypes.GET_FRIENDS:
            
             return {...state,users:payload};
            case ActionTypes.ACCEPT_USER:
                const data = state.users.filter(item=>item._id!==payload._id);
                console.log('from reducer',data)

                return {...state,data}
                    
         default: return state;
     }
 }
 export default userReducer