import React from "react"
import { MovieList } from "./movieList"
import { Container } from "./styled"
import { theme } from "../theme";

export const MovieBrowser = () => (
    <Container theme={theme}>
        <MovieList
            movieTitle={"Mulan"}
            movieYear={"2022"}
            tag1={"Action"}
            tag2={"Drama"}
            tag3={"Comedy"}
            tag4={"Horror"}
            movieRating={"7,5"}
            votesNumber={"350"}
        />
    </Container>
)