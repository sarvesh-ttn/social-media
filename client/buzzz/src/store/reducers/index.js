import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer"
import suggestedFriendsReducer from "./suggestedFriendsReducer"
const reducers = combineReducers({
    allUsers:userReducer,
    profile:profileReducer,
    suggested:suggestedFriendsReducer
});
export default reducers