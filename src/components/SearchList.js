import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchList({ movies, search }) {
  let query = useQuery();

  useEffect(() => {
    let string = query.get('query');
    let page = query.get('page') ?? 1;

    if (string) {
      search(string, page);
    }
  }, []);

  let results = [];

  if (movies && movies.results) {
    return movies.results.map((movie, index) => {
      let date = movie.release_date;
      let dateString = null;

      if (date) {
        dateString = moment(date).format('MMMM D, YYYY');
      }

      return (
        <Card key={index} style={{ marginBottom: '2rem' }}>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Card.Text>{dateString || ''}</Card.Text>
          </Card.Body>
        </Card>
      );
    })
  }

  return (
    <>
      {results.length > 0 ? results : <Skeleton count={10} height={150} />}
    </>
  );
};
