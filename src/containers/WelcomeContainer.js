import React from 'react';
import { Button, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';

const WelcomeContainer = () => {
  return (
    <Jumbotron>
      <h1>Welcome to the Movie Library</h1>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for movies"
          aria-label="Search for movies"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Jumbotron>
  );
};

export default WelcomeContainer;
