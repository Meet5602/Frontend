import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducer,productDetailsReducer} from "./reducers/productReducer.js";
const reducer = combineReducers({
  products:productReducer,
  productDetails:productDetailsReducer
});

const middleware = [thunk];
let initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;