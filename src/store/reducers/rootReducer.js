import { combineReducers } from "redux";
import core from "../reducers/coreReducer";

const rootReducer = combineReducers({
  core,
});

export default rootReducer;
