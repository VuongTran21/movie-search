import React from "react";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchListContainer from "./containers/SearchListContainer";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <SearchListContainer />
        </Route>
        <Route path="/detail/:id" children={<Detail />} />
      </Switch>
    </Router>
  );
}

export default App;
