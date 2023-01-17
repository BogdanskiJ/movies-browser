import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import Descritpion from "./features/Description";
import MovieList from "./features/movieList";
import { People } from "./features/people/PeoplePage";
import { useEffect, useState } from "react";

export const App = () => {


  return (
    <>
    <HashRouter>
      <Navigation />
      {/* <Switch>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch> */}
    </HashRouter>
    
    <Descritpion />
   </>
  );
};

export default App;
