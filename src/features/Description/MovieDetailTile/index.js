import React, { useEffect } from "react";
import { theme } from "../../../theme";
import {
  MovieDescriptionBox,
  MovieDetail,
  MovieRating,
  MovieTags,
  MovieTitle,
  MovieTitleBox,
  MovieYear,
  Poster,
  PosterBox,
  Rating,
  Tag,
  VotesNumber,
} from "./styled";
import { ReactComponent as Star } from "../../../images/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, selectProjectsState } from "../Projects/projectsSlice";

const MovieDetailTile = ({
  movieTitle,
  movieRating,
  votesNumber,
  movieYear,
  id,
  poster_path,
  character,
  projects,
}) => {
  const genreSort = (a, b) => {
    if (a === b.id) {
      return b.name;
    }
  };
  const url_img = "https://image.tmdb.org/t/p/w342";
  const { genres } = useSelector(selectProjectsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <MovieDetail theme={theme}>
      <PosterBox
        to={`/movies/${id}`}
        alt={movieTitle}
        title={movieTitle}
        id={id}
      >
        <Poster src={url_img + poster_path} alt="" />
      </PosterBox>
      <MovieDescriptionBox>
        <MovieTitleBox to={`/movies/${id}`} title={movieTitle} id={id}>
          <MovieTitle>{movieTitle}</MovieTitle>
        </MovieTitleBox>
        <MovieYear>
          {character} ({movieYear})
        </MovieYear>
        <MovieTags>
          {projects !== undefined && genres !== undefined
            ? projects.map((tag) => (
                <Tag key={tag}>
                  {genres.map((tagName) => genreSort(tag, tagName))}
                </Tag>
              ))
            : ""}
        </MovieTags>
        <MovieRating>
          <Star />
          <Rating>{movieRating}</Rating>
          <VotesNumber>{votesNumber} votes</VotesNumber>
        </MovieRating>
      </MovieDescriptionBox>
    </MovieDetail>
  );
};
export default MovieDetailTile;
