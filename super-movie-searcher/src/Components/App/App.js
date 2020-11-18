import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import MoviesPage from '../MoviesPage/MoviesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={MoviesPage} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
