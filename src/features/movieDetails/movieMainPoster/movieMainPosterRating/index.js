import React from "react";
import { MaxRating, MovieDescription, MovieDetail, MovieDetailsss, MovieRating, MovieTags, MovieTitle, MovieYear, Poster, Rating, Tag, VotesNumber } from "./styled";
import { ReactComponent as Star } from '../../../../images/star.svg'

export const MovieMainPosterRating = ({ movieTitle, movieRating, votesNumber, maxRating }) => (
    <MovieDescription>
        <MovieDetail>
            <MovieTitle>
                {movieTitle}
            </MovieTitle>
            <MovieRating>
                <Star />
                <Rating>{movieRating}</Rating>
                <MaxRating>/ {maxRating}</MaxRating>
            </MovieRating>
            <VotesNumber>{votesNumber} votes</VotesNumber>
        </MovieDetail>
    </MovieDescription>
);