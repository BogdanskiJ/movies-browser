import  Pagination  from "../../common/pagination";
import { theme } from "../../theme";
import { Movie } from "./Movie";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";



export const MovieList = () => (

  <MovieListPage theme={theme}>
    <PopularMoviesBox>
      <PopularMoviesName>
        Popular Movies
      </PopularMoviesName>
      <MoviesList>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </MoviesList>
      <Pagination />
    </PopularMoviesBox>
  </MovieListPage>
);
