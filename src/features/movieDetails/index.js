import { theme } from "../../theme";
import { useDataFromAPI } from "../movieList/dataFromAPI";
import { MovieMainPoster } from "./movieMainPoster";
import { MovieTail } from "./movieTile";
import { MovieDetailsPage } from "./styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MovieDetails = () => {
  const {id} = useParams();

  const dataFromAPI = useDataFromAPI();

  const [movieDetails, setMovieDetails] = useState();
  useEffect(() => {
    setMovieDetails(dataFromAPI.data);
  }, [dataFromAPI]);

  // 1 trzeba dodać pobieranie odpowiedniej wielkości obrazu w zależności od @media

  // 2 trzeba dodać sprawdzanie czy wystepuje plakat itp
  
  return (
    (movieDetails !== undefined)
      ?
      (
        <MovieDetailsPage theme={theme}>
          <MovieMainPoster
            movieBackgroundPosterW1280={`https://image.tmdb.org/t/p/original/${dataFromAPI.data.backdrop_path}`}
            movieTitle={movieDetails.title}
            movieRating={parseFloat(movieDetails.vote_average).toFixed(2)}
            votesNumber={movieDetails.vote_count}
            maxRating={"10"}
          />
          <MovieTail
            movieTilePoster={`https://image.tmdb.org/t/p/w1280/${dataFromAPI.data.poster_path}`}
            movieTitle={movieDetails.title}
            movieYear={movieDetails.release_date.toString().slice(0, 4)}
            countryProductionArray={movieDetails.production_countries}
            releaseData={movieDetails.release_date}
            tagArray={movieDetails.genres}
            movieRating={parseFloat(movieDetails.vote_average).toFixed(2)}
            votesNumber={movieDetails.vote_count}
            maxRating={"10"}
            movieStory={movieDetails.overview}
          />
        </MovieDetailsPage>
      )
      :
      ("")
  )
};


export default MovieDetails;
