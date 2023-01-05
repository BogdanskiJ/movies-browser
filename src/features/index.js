import React from "react"
import { MovieList } from "./movieList"
import { Container } from "./styled"
import { theme } from "../theme";
import { MovieDetails } from "./movieDetails";


export const MovieBrowser = () => (
    <Container theme={theme}>

        {/* <MovieList /> */}
        <MovieDetails />
        
    </Container>




)