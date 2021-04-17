import { combineReducers } from "redux";

import gestureReducer from "./gesture/gesture.reducer";

const rootReducer = combineReducers({
  hand: gestureReducer,
});

export default rootReducer;
