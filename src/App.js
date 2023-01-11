import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
<<<<<<< HEAD
import People from "./features/people/PeoplePage";

export const App = () => {
  return (
  <>
    <Navigation />
    <People />
    </>
    
  );
}
=======
import { MovieList } from "./features/movieList";
import { People } from "./features/people/PeoplePage";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/movies">
        <MovieList />
      </Route>
      <Route path="/people">
        <People />
      </Route>
      <Route path="/">
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </HashRouter>
);
>>>>>>> eee8dc43871a6d631ad7cca1efa2c370335cd0fc

export default App;
