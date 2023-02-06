import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./pagination/index";
import { theme } from "../../theme";
import Movie from "./Movie";
import { fetchGenresList, fetchMovieList, selectGenresList, selectMovieList, selectMovieListStatus, setPage, getQuery, selectMovieTotalResults, goOnTop, setQueryPage, selectMovieTotalPages } from "./movieListSlice";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { useParams } from "react-router-dom";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import NoResultPage from "../../common/NoResultPage";

const MovieList = ({ }) => {
  const dispatch = useDispatch();
  const { page } = useParams();
  const movies = useSelector(selectMovieList);
  const genres = useSelector(selectGenresList);
  const status = useSelector(selectMovieListStatus);
  const query = useQueryParameter(searchQueryParamName);
  const totalResults = useSelector(selectMovieTotalResults);
  const totalPages = useSelector(selectMovieTotalPages);

  useEffect(() => {
    dispatch(setPage(page))
    dispatch(getQuery(query));
    (page > totalPages ? dispatch(setPage(1)) : dispatch(setPage(page)));
    dispatch(fetchMovieList(page));
    dispatch(fetchGenresList());
    dispatch(goOnTop());
  }, [page, query, totalPages, dispatch]);

  return (
    <>
      {status === "loading" ? <LoadingPage title={"Search results for \"Popular Movies\""} />
        : status === "error" ? <ErrorPage />
          : totalResults === 0 ? <NoResultPage />
            : (
              <MovieListPage theme={theme}>
                <PopularMoviesBox>
                  <PopularMoviesName>
                    {!query ? "Popular Movies"
                      : `Search results for "${query}" (${totalResults})`}
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