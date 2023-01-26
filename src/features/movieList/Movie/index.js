import React from "react";
import { theme } from "../../../theme";
import { MovieDescriptionBox, MovieDetail, MovieRating, MovieTags, MovieTitle, MovieTitleBox, MovieYear, Poster, PosterBox, Rating, Tag, VotesNumber } from "./styled";
import { ReactComponent as Star } from '../../../images/star.svg';
import movieListEmptyPoster from "../../../images/movieListEmptyPoster.svg";

const Movie = ({ movieTitle, movieRating, votesNumber, movieYear, moviePosterApiLink, movieTagArray, genresArray, id }) => {
  const genreSort = (a, b) => {
    if (a === b.id) { return (b.name) }
  }
  const url_img = "https://image.tmdb.org/t/p/w342/"

  return (
    <MovieDetail theme={theme} >
      <PosterBox to={`/movies/${id}`} alt={movieTitle} title={movieTitle} id={id}>
        {/* po zmergowaniu wszystkich komponentów link do google trzeba zaminić na link do movieDetail z odpowiednim id filmu */}
        <Poster src={`https://image.tmdb.org/t/p/w342/${moviePosterApiLink}`} alt="" />
      </PosterBox>
      <MovieDescriptionBox>
        <MovieTitleBox to={`/movies/${id}`} title={movieTitle} id={id}>
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