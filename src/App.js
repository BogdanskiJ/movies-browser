import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import Descritpion from "./features/Description";
import MovieDetails from "./features/movieDetails";
import MovieList from "./features/movieList";
import { People } from "./features/people/PeoplePage";

export const App = () => {

  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/people/:id">
            <Descritpion />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/popular-movies/:page">
            <MovieList />
          </Route>
          <Route path="/popular-movies">
            <MovieList />
          </Route>
          <Route path="/popular-people/:page">
            <People />
          </Route>
          <Route path="/popular-people">
            <People />
          </Route>
          <Route path="/">
            <Redirect to="/popular-movies" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;