import { theme } from "../../theme";
import { useMovieTailAPI } from "./movieTile/movieTailAPI";
import { Cast } from "./people/movieDetailsPeopleTile";
import { MovieMainPoster } from "./movieMainPoster";
import { MovieTail } from "./movieTile";
import { MovieDetailsPage, TileBox } from "./styled";
import { useEffect, useState } from "react";
import { useMovieDetailPeopleAPI } from "./people/movieDetailPeopleAPI";
import { CastBox, Title } from "./styled";
import { useDispatch } from "react-redux";

const MovieDetails = () => {
  const dispatch = useDispatch();

  const movieTailAPI = useMovieTailAPI();
  const castAPI = useMovieDetailPeopleAPI();

  const [movieDetails, setMovieDetails] = useState();
  const [castArray, setCastArray] = useState({});
  const [crewArray, setCrewArray] = useState({});

  useEffect(() => {
    setMovieDetails(movieTailAPI.data);
  }, [movieTailAPI]);

  useEffect(() => {
    setCastArray(castAPI.data.cast);
  }, [castAPI]);

  useEffect(() => {
    setCrewArray(castAPI.data.crew);
  }, [castAPI]);

  return (
    (movieDetails !== undefined)
      ?
      (
        <MovieDetailsPage theme={theme}>
          {movieTailAPI.data.backdrop_path === null ?
            "" :
            <MovieMainPoster
              movieBackgroundPosterW1280={`https://image.tmdb.org/t/p/original/${movieTailAPI.data.backdrop_path}`}
              movieTitle={movieDetails.title}
              movieRating={parseFloat(movieDetails.vote_average).toFixed(2)}
              votesNumber={movieDetails.vote_count}
              maxRating={"10"}
            />
          }
          <MovieTail
            movieTilePoster={`https://image.tmdb.org/t/p/w1280/${movieTailAPI.data.poster_path}`}
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
          <>
            {((castArray !== undefined)
              ?
              <CastBox>
                <Title>Cast</Title>
                <TileBox>
                  {(castArray.map(cast =>
                    <Cast
                      key={cast.id}
                      name={cast.name}
                      profile_path={cast.profile_path}
                      character={cast.character}
                    />
                  ))}
                </TileBox>
              </CastBox>
              :
              ("")
            )}
          </>
          <>
            {((crewArray !== undefined)
              ?
              <CastBox>
                <Title>Crew</Title>
                <TileBox>
                  {(crewArray.map(crew =>
                    <Cast
                      key={crew.credit_id}
                      name={crew.name}
                      profile_path={crew.profile_path}
                      character={crew.department}
                    />
                  ))}
                </TileBox>

              </CastBox>
              :
              ("")
            )}
          </>
        </MovieDetailsPage>
      )
      :
      ("")
  )
};

export default MovieDetails;