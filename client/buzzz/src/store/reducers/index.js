import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer"
const reducers = combineReducers({
    allUsers:userReducer,
    profile:profileReducer
});
export default reducers