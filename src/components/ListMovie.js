import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ListMovie = ({ movies }) => {
  let movieItems = [];

  if (movies.length > 0) {
    movies.map((movie, index) => {
      return movieItems.push(<ListGroup.Item key={index}>{movie.title}</ListGroup.Item>);
    });
  }

  return (
    <>
      <ListGroup>
        {movieItems.length > 0 && movieItems}
      </ListGroup>
    </>
  );
};

export default ListMovie;
