import React from "react";
import { MovieList } from "./movieList";
import { Container } from "./styled";
import { Navigation } from "./people/Navigation";
import { People } from "./people/PeoplePage";
import { theme } from "../theme";
import { MovieDetails } from "./movieDetails";


export const MovieBrowser = () => (
<>
    <Navigation />
    <People />
    </>
);