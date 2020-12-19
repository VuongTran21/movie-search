import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import WelcomeContainer from './containers/WelcomeContainer';
import PopularMovieContainer from './containers/PopularMovieContainer';
import TopMovieContainer from './containers/TopMovieContainer';

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <WelcomeContainer />
        </Col>
      </Row>
      <Row className="row">
        <Col xs={6}>
          <PopularMovieContainer />
        </Col>
        <Col xs={6}>
          <TopMovieContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
