import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Search = ({ searchMovies, search }) => {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSearch = () => {
    if (input) {
      let path = `search?query=${input}`;
      history.push(path);
      search(input, 1);
    } else {
      alert("Input movie name");
    }
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search for movies"
        aria-label="Search for movies"
        aria-describedby="basic-addon2"
        name="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <InputGroup.Append>
        <Button onClick={() => handleSearch()} variant="outline-secondary">
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Search;
