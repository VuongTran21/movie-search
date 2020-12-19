import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PopularMovieContainer from './containers/PopularMovieContainer';

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>To Do List</h1>
          <PopularMovieContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
