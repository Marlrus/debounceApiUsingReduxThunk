import Axios from "axios";

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

export const fetchMovieByTitleAction = () => async (dispatch, getState) => {
  const stateBefore = getState();
  console.log({ stateBefore });
  dispatch(movieFetchStartAction());
  try {
    const res = await Axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=70a503f8"
    );
    dispatch(movieFetchSuccessAction(res.data));
  } catch (err) {
    dispatch(movieFetchFailureAction(err));
  }
  const stateAfter = getState();
  console.log({ stateAfter });
};
