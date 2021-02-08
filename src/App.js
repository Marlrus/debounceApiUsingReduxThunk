import { connect } from "react-redux";

const App = (props) => {
  const { movieState } = props;

  return (
    <div>
      <pre>{JSON.stringify(movieState, null, 2)}</pre>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieState: state.movieData,
});

export default connect(mapStateToProps)(App);
