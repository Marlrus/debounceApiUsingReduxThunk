import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovieByTitleAction } from "./redux/actions/movie.actions";

import styles from "./App.module.css";

const App = (props) => {
  const { movieState, fetchMovieByTitle } = props;
  const { fetching, movieData } = movieState;

  const {
    Title,
    Actors,
    BoxOffice,
    Director,
    Genre,
    Poster,
    Plot,
    Year,
    Ratings,
    Error,
  } = movieData;

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (title === "") return;
    fetchMovieByTitle(title);
  }, [fetchMovieByTitle, title]);

  const setMovie = (e) => setTitle(e.target.value);

  return (
    <>
      <div className={styles.inputContainer}>
        <strong>Title:</strong> <input onChange={setMovie} />
      </div>
      <div className={styles.resultContainer}>
        {fetching && <h1>Loading...</h1>}
        {!fetching && Title && (
          <>
            <h1 className={styles.title}>{Title}</h1>
            <strong>
              [{Year} {Genre}]
            </strong>
            <br />
            <strong>Director:</strong> {Director}
            <p>
              <strong>Cast:</strong> {Actors}
            </p>
            <img
              className={styles.poster}
              src={Poster}
              alt={`${Title} poster`}
            />
            <p className={styles.plot}>
              <strong>Plot:</strong> {Plot}
            </p>
            <div className={styles.ratingsContainer}>
              {Ratings.map(({ Source, Value }) => (
                <div key={Source} className={styles.rating}>
                  <strong>{Source}:</strong> {Value}
                </div>
              ))}
            </div>
            <p>
              <strong>BoxOffice:</strong> {BoxOffice}
            </p>
          </>
        )}
        {!fetching && Error && <p>{Error}</p>}
      </div>
      <div className={styles.resultContainer}>
        <h2>Redux Thunk Debounced API Call</h2>
        <p className={styles.projectDescription}>
          This spike uses the omdbapi to search for movies by title. There is no
          search button implemented becuase the API makes the call once the
          input is filled for a seamless user experience. To avoid excessive API
          calls the API Call is debounced, meaning that the call is only made
          once the input has settled for a set time. In this example, that delay
          is 1s.
        </p>
        <br />
        <p>
          The stack used for prototyping is Create React App, Redux, and
          Redux-Thunk (For async actions).
        </p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movieState: state.movieData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieByTitle: (title) => dispatch(fetchMovieByTitleAction(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
