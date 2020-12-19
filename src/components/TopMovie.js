import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ListMovie from './ListMovie';

const TopMovie = ({ topMovies }) => {
  let movies = [];

  if (topMovies && topMovies.results) {
    topMovies.results.map((movie, index) => {
      return movies.push(<ListGroup.Item key={index}>{movie.title}</ListGroup.Item>);
    });
  }

  return (
    <>
      <h2>Top Movies</h2>
      <ListMovie movies={topMovies.results || []} />
    </>
  );
};

export default TopMovie;
