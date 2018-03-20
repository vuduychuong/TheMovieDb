import { ActionTypes } from "../constants/ActionTypes";

const BASE_URL = "https://api.themoviedb.org/3";

export const apiMiddleware = store => next => action => {
    next(action);
    switch (action.type) {
        case ActionTypes.GET_LIST_MOVIE:
            console.log(action);
            store.dispatch({ type: ActionTypes.GET_LIST_MOVIE_BEGIN });
            fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=d06b1e1b23330ba52e9ab10a1ccd90a8"
            )
                .then(handleErrors)
                .then(res => res.json())
                .then(json => {
                    next({
                        type: ActionTypes.GET_LIST_MOVIE_SUCCESS,
                        payload: json
                    });
                })
                .catch(error => {
                    next({
                        type: ActionTypes.GET_LIST_MOVIE_ERROR,
                        error: error
                    });
                });
            break;
        default:
            break;
    }
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
