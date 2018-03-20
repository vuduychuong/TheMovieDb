import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import { navReducer } from "./NavReducer";

export default combineReducers({
    MovieReducer,
    nav: navReducer,z
});
