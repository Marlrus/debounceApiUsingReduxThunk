import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieByTitleAction } from "./redux/actions/movie.actions";

const App = (props) => {
  const { movieState, fetchMovieByTitle } = props;

  useEffect(() => {
    fetchMovieByTitle();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(movieState, null, 2)}</pre>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieState: state.movieData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieByTitle: () => dispatch(fetchMovieByTitleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
