import React from "react";
import { ListGroup } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router-dom";

const ListMovie = ({ movies }) => {
  let movieItems = [];
  let history = useHistory();

  const goDetail = (id) => {
    history.push(`detail/${id}`);
  };

  if (movies.length > 0) {
    movies.map((movie, index) => {
      return movieItems.push(
        <ListGroup.Item key={index}>
          <span onClick={() => goDetail(movie.id)}>
            {movie.title}
          </span>
        </ListGroup.Item>
      );
    });
  }

  return (
    <>
      <ListGroup>
        {movieItems.length > 0 ? (
          movieItems
        ) : (
          <Skeleton count={10} height={80} />
        )}
      </ListGroup>
    </>
  );
};

export default ListMovie;
