import { theme } from "../../theme";
import { Cast } from "./people/movieDetailsPeopleTile";
import { MovieMainPoster } from "./movieMainPoster";
import { MovieTail } from "./movieTile";
import { MovieDetailsPage, TileBox } from "./styled";
import { useEffect } from "react";
import { CastBox, Title } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectCredits, selectMovieDetails, setMovieId } from "./movieDetailsSlice";
import { useParams } from "react-router";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const credits = useSelector(selectCredits);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails());
    dispatch(setMovieId(id));
  }, [dispatch, id]);

  return (
    (movieDetails !== undefined)
      ?
      (
        <MovieDetailsPage theme={theme}>
          {movieDetails.backdrop_path === null ?
            "" :
            <MovieMainPoster
              movieBackgroundPosterW1280={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
              movieTitle={movieDetails.title}
              movieRating={parseFloat(movieDetails.vote_average).toFixed(2)}
              votesNumber={movieDetails.vote_count}
              maxRating={"10"}
            />
          }
          <MovieTail
            movieTilePoster={`https://image.tmdb.org/t/p/w1280/${movieDetails.poster_path}`}
            movieTitle={movieDetails.title}
            movieYear={movieDetails.release_date}
            countryProductionArray={movieDetails.production_countries}
            releaseData={movieDetails.release_date}
            tagArray={movieDetails.genres}
            movieRating={parseFloat(movieDetails.vote_average).toFixed(2)}
            votesNumber={movieDetails.vote_count}
            maxRating={"10"}
            movieStory={movieDetails.overview}
          />
          <>
            {((credits.cast !== undefined)
              ?
              <CastBox>
                <Title>Cast</Title>
                <TileBox>
                  {credits.cast.map(cast =>
                    <Cast
                      key={cast.credits_id}
                      name={cast.name}
                      profile_path={cast.profile_path}
                      character={cast.character}
                      id={cast.id}
                    />
                  )}
                </TileBox>
              </CastBox>
              :
              ("")
            )}
          </>
          <>
            {((credits.crew !== undefined)
              ?
              <CastBox>
                <Title>Crew</Title>
                <TileBox>
                  {(credits.crew.map(crew =>
                    <Cast
                      key={crew.credit_id}
                      name={crew.name}
                      profile_path={crew.profile_path}
                      character={crew.department}
                      id={crew.id}
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