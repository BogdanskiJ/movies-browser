import React from "react";
import { theme } from "../../../theme";
import { MovieDescriptionBox, MovieDetail, MovieRating, MovieTags, MovieTitle, MovieTitleBox, MovieYear, Poster, PosterBox, Rating, Tag, VotesNumber } from "./styled";
import { ReactComponent as Star } from '../../../images/star.svg';

const Movie = ({ movieTitle, movieRating, votesNumber, movieYear, moviePosterApiLink, movieTagArray, genresArray }) => {

  const genreSort = (a, b) => {
    if (a === b.id) { return (b.name) }
  }

  return (
    <MovieDetail theme={theme} >
      <PosterBox href="https://google.pl" alt={movieTitle} title={movieTitle}>
        <Poster src={`https://image.tmdb.org/t/p/w342/${moviePosterApiLink}`} alt="" />
      </PosterBox>
      <MovieDescriptionBox>
        <MovieTitleBox href="https://google.pl" title={movieTitle}>
          <MovieTitle>
            {movieTitle}
          </MovieTitle>
        </MovieTitleBox>
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