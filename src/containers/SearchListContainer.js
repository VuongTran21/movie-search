import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import WelcomeContainer from '../containers/WelcomeContainer';
import SearchList from '../components/SearchList';
import { connect } from 'react-redux';
import { searchAction } from '../redux/actions';

const mapStateToProps = state => {
  return {
    movies: state.searchMovies
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search: (query, page) => dispatch(searchAction(query, page))
  }
}

const SearchListContainer = ({ movies, search }) => {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <WelcomeContainer />
        </Col>
      </Row>
      <Row className="row">
        <Col xs={12}>
          <SearchList movies={movies} search={search} />
        </Col>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListContainer);
