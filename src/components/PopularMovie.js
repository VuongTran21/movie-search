import React from 'react';
import ListMovie from './ListMovie';

const PopularMovie = ({ popularMovies }) => {

  return (
    <>
      <h2>Popular Movies</h2>
      <ListMovie movies={popularMovies.results || []} />
    </>
  );
};

export default PopularMovie;
