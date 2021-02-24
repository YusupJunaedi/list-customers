import { createStore, applyMiddleware } from "redux";
import indexReducer from "./reducer/customers";

const storeRedux = createStore(indexReducer);

export default storeRedux;