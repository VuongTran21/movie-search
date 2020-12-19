import { connect } from 'react-redux';
import PopularMovie from '../components/PopularMovie';

const mapStateToProps = (state) => {
  return {
    popularMovies: state.popularMovies
  }
};

export default connect(mapStateToProps)(PopularMovie);
