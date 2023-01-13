import React, { useEffect, useState } from "react";
import { theme } from "../../../theme";
import { MovieDescriptionBox, MovieDetail, MovieRating, MovieTags, MovieTitle, MovieYear, Poster, Rating, Tag, VotesNumber } from "./styled";
import { ReactComponent as Star } from '../../../images/star.svg';

const Movie = ({ movieTitle, movieRating, votesNumber, movieYear, moviePosterApiLink, movieTagArray }) => {

  return (
    <MovieDetail theme={theme}>
      <Poster src={`https://image.tmdb.org/t/p/w342/${moviePosterApiLink}`} alt="" />
      {/* Należy dodać w <Poster src> jeszcze pobieranie odpowiedniej wielkości obrazu w zależności od rozdzielczości */}
      <MovieDescriptionBox>
        <MovieTitle>
          {movieTitle}
        </MovieTitle>
        <MovieYear>
          {movieYear.slice(0, 4)}
        </MovieYear>
        <MovieTags>
          {
            (movieTagArray !== undefined ?
              (movieTagArray.map(tag =>
                <Tag key={tag}>
                  {tag}
                </Tag>
              )) : "")
          }
        </MovieTags>
        <MovieRating>
          <Star />
          <Rating>{movieRating}</Rating>
          <VotesNumber>{votesNumber} votes</VotesNumber>
        </MovieRating>
      </MovieDescriptionBox>
    </MovieDetail>
  )
};
export default Movie;