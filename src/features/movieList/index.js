import Pagination from "../../common/pagination";
import { theme } from "../../theme";
import { Movie } from "./Movie";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";


export const MovieList = ({ movieTitle, movieYear, tag1, tag2, tag3, tag4, movieRating, votesNumber }) => (

  <MovieListPage theme={theme}>
    <PopularMoviesBox>
      <PopularMoviesName>
        Popular Movies
      </PopularMoviesName>
      <MoviesList>
        <Movie
          movieTitle={movieTitle}
          movieYear={movieYear}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
          movieRating={movieRating}
          votesNumber={votesNumber}
        />
        <Movie
          movieTitle={movieTitle}
          movieYear={movieYear}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
          movieRating={movieRating}
          votesNumber={votesNumber}
        />
        <Movie
          movieTitle={movieTitle}
          movieYear={movieYear}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
          movieRating={movieRating}
          votesNumber={votesNumber}
        />
        <Movie
          movieTitle={movieTitle}
          movieYear={movieYear}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
          movieRating={movieRating}
          votesNumber={votesNumber}
        />
        <Movie
          movieTitle={movieTitle}
          movieYear={movieYear}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
          movieRating={movieRating}
          votesNumber={votesNumber}
        />
        <Movie
          movieTitle={movieTitle}
          movieYear={movieYear}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
        />
        <Movie
          movieTitle={movieTitle}
          movieYear={movieYear}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
        />
        <Movie
          movieTitle={movieTitle}
          movieYear={movieYear}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
        />
      </MoviesList>
      <Pagination />
    </PopularMoviesBox>
  </MovieListPage>
);