import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    topMovies: state.topMovies.results,
    popularMovies: state.popularMovies.results,
  };
};

const Detail = ({ topMovies, popularMovies }) => {
  let { id } = useParams();
  let movie = null;

  if (topMovies && topMovies.length && popularMovies && popularMovies.length) {
    const movies = [...topMovies, ...popularMovies];

    movie = movies.find((m) => parseInt(m.id) === parseInt(id));
    console.log('movie', movie);
  }

  return (
    <>
      {movie && (
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">{movie.release_date && movie.release_date}</Card.Footer>
        </Card>
      )}
    </>
  );
};

export default connect(mapStateToProps)(Detail);
