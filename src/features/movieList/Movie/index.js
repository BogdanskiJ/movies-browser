import React, { useEffect, useState } from "react";
import { theme } from "../../../theme";
import { MovieDescriptionBox, MovieDetail, MovieRating, MovieTags, MovieTitle, MovieYear, Poster, Rating, Tag, VotesNumber } from "./styled";
import { ReactComponent as Star } from '../../../images/star.svg';

const Movie = ({ movieTitle, movieRating, votesNumber, movieYear, moviePosterApiLink, movieTagArray, genresArray }) => {

  const genreSort = (a, b) => {
    if (a === b.id) { return (b.name) }
  }
  
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
            ((movieTagArray !== undefined && genresArray !== undefined) ?
              (movieTagArray.map(tag =>
                <Tag key={tag}>
                  {genresArray.map(tagName => genreSort(tag, tagName))}
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