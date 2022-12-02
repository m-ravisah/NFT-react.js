import { combineReducers } from "redux";
import  collectionSlice  from "../slices/Collectionservice";
import authSlice from "../slices/authservice";

const rootReducer = combineReducers({

auth:authSlice,
collection:collectionSlice,



});

export default rootReducer;
