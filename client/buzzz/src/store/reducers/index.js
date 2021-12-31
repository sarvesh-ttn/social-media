import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer"
import suggestedFriendsReducer from "./suggestedFriendsReducer"
import showProfileReducer from './showProfileReducer';
import userRequestReducer from './userRequestReducer';
import postReducer from './postReducer';
import allPostsReducer from './allPostsReducer';

const reducers = combineReducers({
    allUsers:userReducer,
    profile:profileReducer,
    suggested:suggestedFriendsReducer,
    showProfile:showProfileReducer,
    requestFriends:userRequestReducer,
    post:postReducer,
    allPosts:allPostsReducer
});
export default reducers