import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./pagination/index";
import { theme } from "../../theme";
import Movie from "./Movie";
import { fetchGenresList, fetchMovieList, selectGenresList, selectMovieList, setCurrentPageAPI } from "./movieListSlice";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";

const MovieList = ({ }) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovieList);
  const genres = useSelector(selectGenresList);

  useEffect(() => {
    dispatch(fetchMovieList());
    dispatch(fetchGenresList());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [dispatch]);

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
              genres={genres}
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