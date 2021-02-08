import { combineReducers } from "redux";
import movieReducer from "./reducers/movie.reducer";

export const rootReducer = combineReducers({
  movieData: movieReducer,
});
