import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/MovieReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//
// const initState = {
//     value: 10
// };
//
// const reducer = (state = initState, action) => {
//     switch (action.type) {
//         case "UP":
//             return { value: state.value + 1 };
//         default:
//             return state;
//     }
// };

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
