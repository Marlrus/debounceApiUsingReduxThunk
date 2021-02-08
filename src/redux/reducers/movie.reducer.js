import { movieActionTypes } from "../actions/movie.actions";

const INITIAL_STATE = {
  loading: true,
  movieData: [],
  error: null,
};

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case movieActionTypes.ADD_MOVIE_DATA:
      return {
        ...state,
        movieData: [payload],
      };
    default:
      return state;
  }
};

export default movieReducer;
