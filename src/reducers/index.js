import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { connectRouter } from "connected-react-router";

import usersReducer from "./users";
import helperReducer from "./helper";

export default combineReducers({
  routing: routerReducer,
  usersReducer,
  helperReducer,
});
