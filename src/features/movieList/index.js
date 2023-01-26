import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import Pagination from "./pagination/index";
import { theme } from "../../theme";
import { useDataFromAPI, useNextDataFromAPI } from "./dataFromAPI";
import { useGenresFromAPI } from "./genresList";
import Movie from "./Movie";
import { selectMovieListState, setCurrentPageAPI } from "./movieListSlice";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";

const MovieList = ({ }) => {

  const dataFromAPI = useDataFromAPI();
  const genresFromAPI = useGenresFromAPI([]);

  const [moviesArray, setMoviesArray] = useState([]);
  const [genresArray, setGenresArray] = useState([]);

  useEffect(() => {
    setMoviesArray(dataFromAPI.data.results);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [dataFromAPI]);

  useEffect(() => {
    setGenresArray(genresFromAPI.genres.genres);
  }, [genresFromAPI]);

  return (
    <MovieListPage theme={theme}>
      <PopularMoviesBox>
        <PopularMoviesName>
          Popular Movies
        </PopularMoviesName>
        <MoviesList
        >
          {((moviesArray !== undefined && moviesArray !== 0)
            ?
            (moviesArray.map(movie => <Movie
              genresArray={genresArray}
              movieTitle={movie.title}
              key={movie.id}
              movieRating={movie.vote_average}
              votesNumber={movie.vote_count}
              movieTagArray={movie.genre_ids}
              movieYear={movie.release_date}
              moviePosterApiLink={movie.poster_path}
              id={movie.id}
            >
            </Movie>))
            :
            (""))
          }
        </MoviesList>
        {((moviesArray !== undefined && moviesArray !== 0)
          ?
          (<Pagination
            total_pages={dataFromAPI.data.total_pages}
          />)
          :
          (""))
        }
      </PopularMoviesBox>
    </MovieListPage>
  );
}
export default MovieList;