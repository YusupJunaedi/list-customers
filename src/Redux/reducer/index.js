import { combineReducers } from "redux";
import customersReducer from "./customers";

const indexReducer = combineReducers({
  customers: customersReducer,
});

export default indexReducer;
