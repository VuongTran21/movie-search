import React from 'react';
import { connect } from 'react-redux';
import TopMovie from '../components/TopMovie';

const mapStateToProps = (state) => {
  return {
    topMovies: state.topMovies
  }
};

export default connect(mapStateToProps)(TopMovie);
