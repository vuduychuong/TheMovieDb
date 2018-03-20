import { ActionTypes } from "../constants/ActionTypes";
import { Config } from "../constants/Config";

const initState = {
    movies: [],
    loading: false,
    error: null,
};

export default function(state = initState, action) {
    switch (action.type) {
        case ActionTypes.GET_LIST_MOVIE_BEGIN:
        console.log("get list movie begin");
            return {
                ...state,
                loading: true,
                error: null
            };
        case ActionTypes.GET_LIST_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.results
            };
        case ActionTypes.GET_LIST_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                movies: []
            };
        case ActionTypes.SHOW_DETAIL_MOVIE:
            return {
                ...state,
            }
        default:
            return state;
    }

    return state;
}
