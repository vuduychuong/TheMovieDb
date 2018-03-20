import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/MovieReducer";
import thunk from "redux-thunk";
import { apiMiddleware } from "./middlewares/APIMiddleware";
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

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, apiMiddleware))
);

export default store;
