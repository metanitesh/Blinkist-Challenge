import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './components/nav';
import Home from './components/home';
import Library from './components/library';
import Book from './components/book';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/book/:id" component={Book} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
