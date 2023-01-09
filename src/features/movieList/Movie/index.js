import React from "react";
import { css } from "styled-components";
import { theme } from "../../../theme";
import { MovieDescriptionBox, MovieDetail, MovieRating, MovieTags, MovieTitle, MovieYear, Poster, Rating, Tag, VotesNumber } from "./styled";
import poster from "../../../images/poster.png"
import { ReactComponent as Star } from '../../../images/star.svg'

export const Movie = ({ movieTitle, movieYear, tag1, tag2, tag3, tag4, movieRating, votesNumber }) => (
    <>
        <MovieDetail theme={theme}>
            <Poster src={poster} alt="" />
            <MovieDescriptionBox>
                <MovieTitle>
                    {movieTitle}
                </MovieTitle>
                <MovieYear>
                    {movieYear}
                </MovieYear>
                <MovieTags>
                    <Tag>{tag1}</Tag>
                    <Tag>{tag2}</Tag>
                    <Tag>{tag3}</Tag>
                    <Tag>{tag4}</Tag>
                </MovieTags>
                <MovieRating>
                    <Star />
                    <Rating>{movieRating}</Rating>
                    <VotesNumber>{votesNumber} votes</VotesNumber>
                </MovieRating>
            </MovieDescriptionBox>
        </MovieDetail>
    </>
    );