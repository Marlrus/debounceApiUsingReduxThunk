import Axios from "axios";
import makeDebounce from "redux-debounce-thunk";

export const movieActionTypes = {
  MOVIE_FETCH_SUCCESS: "MOVIE_FETCH_SUCCESS",
  MOVIE_FETCH_START: "MOVIE_FETCH_START",
  MOVIE_FETCH_FAILURE: "MOVIE_FETCH_FAILURE",
};

export const movieFetchSuccessAction = (data) => ({
  type: movieActionTypes.MOVIE_FETCH_SUCCESS,
  payload: data,
});

export const movieFetchStartAction = () => ({
  type: movieActionTypes.MOVIE_FETCH_START,
});

export const movieFetchFailureAction = (err) => ({
  type: movieActionTypes.MOVIE_FETCH_FAILURE,
  payload: err,
});

const fetchMovieByTitle = (title) => async (dispatch) => {
  dispatch(movieFetchStartAction());
  try {
    console.log(title);
    const res = await Axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=70a503f8&t=${title}`
    );
    dispatch(movieFetchSuccessAction(res.data));
  } catch (err) {
    dispatch(movieFetchFailureAction(err));
  }
};

export const fetchMovieByTitleAction = makeDebounce(fetchMovieByTitle, 1000);
