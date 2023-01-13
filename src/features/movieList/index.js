import { useEffect, useState } from "react";
import Pagination from "../../common/pagination";
import { theme } from "../../theme";
import { useDataFromAPI } from "./dataFromAPI";
import Movie from "./Movie";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";

const MovieList = ({ }) => {

  const dataFromAPI = useDataFromAPI();

  const [moviesArray, setMoviesArray] = useState([]);
  useEffect(() => {
    setMoviesArray(dataFromAPI.data.results);
  }, [dataFromAPI]);

  return (
    <MovieListPage theme={theme}>
      <PopularMoviesBox>
        <PopularMoviesName>
          Popular Movies
        </PopularMoviesName>
        <MoviesList
        >
          {(moviesArray !== undefined
            ?
            (moviesArray.map(movie => <Movie
              movieTitle={movie.title}
              key={movie.id}
              movieRating={movie.vote_average}
              votesNumber={movie.vote_count}
              movieTagArray={movie.genre_ids}
              movieYear={movie.release_date}
              moviePosterApiLink={movie.poster_path}
            >
            </Movie>))
            :
            (""))
          }
        </MoviesList>
        <Pagination />
      </PopularMoviesBox>
    </MovieListPage>
  );
}
export default MovieList;