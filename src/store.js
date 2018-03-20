import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/MovieReducer";
import thunk from "redux-thunk";
import { apiMiddleware } from "./middlewares/APIMiddleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav
);

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, middleware))
);

export default store;
