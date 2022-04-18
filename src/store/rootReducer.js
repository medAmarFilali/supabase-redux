import { combineReducers } from "redux";
import listReducer from "./reducers/ListReducer";

const rootReducer = combineReducers({
  list: listReducer,
});

export default rootReducer;
