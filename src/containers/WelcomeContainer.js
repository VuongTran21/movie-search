import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { searchAction } from '../redux/actions';

const mapStateToProps = state => {
  return {
    searchMovies: state.searchMovies
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search: (query, page) => dispatch(searchAction(query, page))
  }
}

const WelcomeContainer = ({ searchMovies, search }) => {
  return (
    <Jumbotron>
      <h1>Welcome to the Movie Library</h1>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <Search search={search} searchMovies={searchMovies || {}} />
    </Jumbotron>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
