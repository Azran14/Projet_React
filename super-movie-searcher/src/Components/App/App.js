import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import MoviesPage from '../MoviesPage/MoviesPage';
import MoviePage from '../MoviePage/MoviePage';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={MoviesPage} />
        <Route exact path='/movie/:id' component={MoviePage} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
