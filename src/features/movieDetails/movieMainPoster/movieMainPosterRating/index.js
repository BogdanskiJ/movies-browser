import React from "react";
import { MaxRating, MovieDescription, MovieDetail, MovieRating, MovieTitle, Rating,  VotesNumber } from "./styled";
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
                <VotesNumber>{votesNumber} votes</VotesNumber>
            </MovieRating>
        </MovieDetail>
    </MovieDescription>
);