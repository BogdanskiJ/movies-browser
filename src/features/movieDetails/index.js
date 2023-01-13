import { theme } from "../../theme";
import { useDataFromAPI } from "./dataFromAPI";
import { Cast } from "./cast";
import { Crew } from "./crew";
import { MovieMainPoster } from "./movieMainPoster";
import { MovieTail } from "./movieTile";
import { MovieDetailsPage } from "./styled";
import { useEffect, useState } from "react";



const MovieDetails = () => {

  const dataFromAPI = useDataFromAPI();

  const [movieTitle, setMovieTitle] = useState();
  const [movieRating, setMovieRating] = useState();
  const [movieYear, setMovieYear] = useState();
  const [releaseData, setReleaseData] = useState();
  const [votesNumber, setVotesNumber] = useState();
  const [movieStory, setMovieStory] = useState();
  const [countryProduction, setCountryProduction] = useState([]);
  const [tag, setTag] = useState([]);
  const [movieBackgroundPosterW1280, setMovieBackgroundPosterW1280] = useState("");
  const [movieTilePoster, setMovieTilePoster] = useState("");


  useEffect(() => {
    setMovieYear(dataFromAPI.data.release_date.toString().slice(0, 4));
    setMovieRating(parseFloat(dataFromAPI.data.vote_average).toFixed(2));
    setMovieTitle(dataFromAPI.data.title);
    setReleaseData(dataFromAPI.data.release_date); setVotesNumber(dataFromAPI.data.vote_count); setMovieStory(dataFromAPI.data.overview);
    setCountryProduction(dataFromAPI.data.production_countries);
    setTag(dataFromAPI.data.genres);
    setMovieBackgroundPosterW1280(`https://image.tmdb.org/t/p/original/${dataFromAPI.data.backdrop_path}`);
    setMovieTilePoster(`https://image.tmdb.org/t/p/w1280/${dataFromAPI.data.poster_path}`);
  }, [dataFromAPI]);
  
//trzeba dodać pobieranie odpowiedniej wielkości obrazu w zależności od @media

//trzeba dodać sprawdzanie czy wystepuje plakat itp
  return (
    <MovieDetailsPage theme={theme}>
      <MovieMainPoster
        movieBackgroundPosterW1280={movieBackgroundPosterW1280}
        movieTitle={movieTitle}
        movieRating={movieRating}
        votesNumber={votesNumber}
        maxRating={"10"}
      />
      <MovieTail
      movieTilePoster={movieTilePoster}
        movieTitle={movieTitle}
        movieYear={movieYear}
        countryProduction={countryProduction}
        releaseData={releaseData}
        tag={tag}
        movieRating={movieRating}
        votesNumber={votesNumber}
        maxRating={"10"}
        movieStory={movieStory}
      />
      <Cast />
      <Crew />
    </MovieDetailsPage>
  )

};

export default MovieDetails;