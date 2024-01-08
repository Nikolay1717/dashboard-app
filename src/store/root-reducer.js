import { combineReducers } from "redux";
import { positionReducer } from "./positions/reducer";
import { filterReducer } from "./filters/reducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});