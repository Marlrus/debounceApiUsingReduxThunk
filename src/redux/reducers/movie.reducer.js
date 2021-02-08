import { movieActionTypes } from "../actions/movie.actions";

const INITIAL_STATE = {
  loading: false,
  movieData: [],
  error: null,
};

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case movieActionTypes.MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        movieData: payload,
      };
    case movieActionTypes.MOVIE_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case movieActionTypes.MOVIE_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.message,
      };
    default:
      return state;
  }
};

export default movieReducer;
