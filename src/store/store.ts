import { combineReducers, createStore } from "redux";
import { themeReducer } from "./themeSlice";
const mainReducer = combineReducers({
  themeState: themeReducer,
});
const store = createStore(mainReducer);
export default store;
