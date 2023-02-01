import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./pagination/index";
import { theme } from "../../theme";
import Movie from "./Movie";
import { fetchGenresList, fetchMovieList, selectGenresList, selectMovieList, selectMovieListStatus, setPage } from "./movieListSlice";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { useParams } from "react-router-dom";

const MovieList = ({ }) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovieList);
  const genres = useSelector(selectGenresList);
  const status = useSelector(selectMovieListStatus);
  const { page } = useParams();

  useEffect(() => {
    dispatch(setPage(page));
    dispatch(fetchMovieList(page));
    dispatch(fetchGenresList());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [page, dispatch]);

  return (
    <>
      {status === "loading" ? <LoadingPage title={"Loading..."} />
        : status === "error" ? <ErrorPage />
          : (
            <MovieListPage theme={theme}>
              <PopularMoviesBox>
                <PopularMoviesName>
                  Popular Movies
                </PopularMoviesName>
                <MoviesList>
                  {(movies.map(movie => <Movie
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
                  </Movie>))}
                </MoviesList>
                <Pagination />
              </PopularMoviesBox>
            </MovieListPage>
          )}
    </>
  );
};
export default MovieList;