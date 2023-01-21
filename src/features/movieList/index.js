import { useEffect, useState } from "react";
import Pagination from "../../common/pagination";
import { theme } from "../../theme";
import { useDataFromAPI } from "./dataFromAPI";
import { useGenresFromAPI } from "./genresList";
import Movie from "./Movie";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";

const MovieList = ({ }) => {

  const dataFromAPI = useDataFromAPI();
  const genresFromAPI = useGenresFromAPI([]);

  const [moviesArray, setMoviesArray] = useState([]);
  const [genresArray, setGenresArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage] = useState(8);
  const [apiPage, setApiPage]= useState(1);

  useEffect(() => {
    setMoviesArray(dataFromAPI.data.results);
  }, [dataFromAPI]);

  useEffect(() => {
    setGenresArray(genresFromAPI.genres.genres);
  }, [genresFromAPI]);

  const indexOfLastPost = currentPage * moviePerPage;
  const indexOfFirstPost = indexOfLastPost - moviePerPage;


  const paginate = () => {
    setCurrentPage(currentPage+1);
    setApiPage(apiPage+1)
  }


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
            ((moviesArray.slice(indexOfFirstPost, indexOfLastPost)).map(movie => <Movie
              genresArray={genresArray}
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
        {((moviesArray !== undefined && moviesArray !== 0)
          ?
          (<Pagination
            moviePerPage={moviePerPage}
            totalPost={moviesArray.length}
            paginate={paginate}
          />)
          :
          (""))
        }
      </PopularMoviesBox>
    </MovieListPage>
  );
}
export default MovieList;
