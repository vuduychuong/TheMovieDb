import { ActionTypes } from "../constants/ActionTypes";
import { Config } from "../constants/Config";

export function getListMovie() {
    return dispatch => {
        dispatch(getListMovieBegin());
        return fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=d06b1e1b23330ba52e9ab10a1ccd90a8"
        )
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(getListMovieSuccess(json.results));
                return json.results;
            })
            .catch(error => dispatch(getListMovieError(error)));
    };
}

export function getListMovieBegin() {
    return {
        type: ActionTypes.GET_LIST_MOVIE_BEGIN
    };
}

export function getListMovieSuccess(payload) {
    return {
        type: ActionTypes.GET_LIST_MOVIE_SUCCESS,
        payload: payload
    };
}

export function getListMovieError(error) {
    return {
        type: ActionTypes.GET_LIST_MOVIE_ERROR,
        error: error
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
