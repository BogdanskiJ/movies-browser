import { theme } from "../../theme";
import { Cast } from "./cast";
import { Crew } from "./crew";
import { MovieMainPoster } from "./movieMainPoster";
import { MovieTail } from "./movieTile";
import { MovieDetailsPage } from "./styled";

export const MovieDetails = () => (

  <MovieDetailsPage theme={theme}>
    <MovieMainPoster
      movieTitle={"Mulan"}
      movieRating={"7,5"}
      votesNumber={"350"}
      maxRating={"10"}
    />
    <MovieTail
      movieTitle={"Mulan"}
      movieYear={"2020"}
      countryProduction={"USA"}
      releaseData={"24.10.2020"}
      tag1={"Action"}
      tag2={"Horror"}
      tag3={"Drama"}
      tag4={"Comedy"}
      movieRating={"7,5"}
      votesNumber={"350"}
      maxRating={"10"}
      movieStory={"A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father."}
    />
    <Cast />
    <Crew />
  </MovieDetailsPage>
);
