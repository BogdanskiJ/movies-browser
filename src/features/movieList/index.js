import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import Pagination from "./pagination/index";
import { theme } from "../../theme";
import { useGenresFromAPI } from "./genresList";
import Movie from "./Movie";
import { fetchMovieList, selectMovieList, selectMovieListState, setCurrentPageAPI } from "./movieListSlice";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";

const MovieList = ({ }) => {
  const dispatch = useDispatch(); 
  const genresFromAPI = useGenresFromAPI([]);
  const [genresArray, setGenresArray] = useState([]);

  const movies = useSelector(selectMovieList);

  useEffect(() => {
    dispatch(fetchMovieList());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [dispatch]);

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
          {((movies !== undefined && movies !== 0)
            ?
            (movies.map(movie => <Movie
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
        {((movies !== undefined && movies !== 0)
          ?
          (<Pagination
            // total_pages={dataFromAPI.data.total_pages}
          />)
          :
          (""))
        }
      </PopularMoviesBox>
    </MovieListPage>
  );
}
export default MovieList;