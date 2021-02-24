import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import indexReducer from "./reducer/customers";

const enhancers = applyMiddleware(logger);

const storeRedux = createStore(indexReducer, enhancers);

export default storeRedux;