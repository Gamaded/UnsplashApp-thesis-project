import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import appData from "./reducers/reducers";

const store = createStore(appData, applyMiddleware(thunkMiddleware));

export default store;
