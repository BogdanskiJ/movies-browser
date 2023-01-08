import React from "react"
import { MovieList } from "./movieList"
import { Container } from "./styled"
import { theme } from "../theme";

export const MovieBrowser = () => (
    <Container theme={theme}>

        <MovieList />

    </Container>




)