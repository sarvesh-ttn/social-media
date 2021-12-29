import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer"
import suggestedFriendsReducer from "./suggestedFriendsReducer"
import showProfileReducer from './showProfileReducer';
const reducers = combineReducers({
    allUsers:userReducer,
    profile:profileReducer,
    suggested:suggestedFriendsReducer,
    showProfile:showProfileReducer
});
export default reducers