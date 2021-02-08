export const movieActionTypes = {
  ADD_MOVIE_DATA: "ADD_MOVIE_DATA",
};

export const addMovieDataAction = (data) => ({
  type: movieActionTypes.ADD_MOVIE_DATA,
  payload: data,
});
