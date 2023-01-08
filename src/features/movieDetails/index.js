import { theme } from "../../theme";
import { Cast } from "./cast";
import { Crew } from "./crew";
import { MovieMainPoster } from "./movieMainPoster";
import { MovieTail } from "./movieTile";
import { MovieDetailsPage } from "./styled";


export const MovieDetails = () => (

  <MovieDetailsPage theme={theme}>
    <MovieMainPoster 
    movieTitle={"Mulan Long Title"}
    movieRating={"7,5"}
    votesNumber={"350"}
    maxRating={"10"}
    />
    <MovieTail 
    movieTitle={"Mulan Long Title"}
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
    movieStory={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ullam eos, temporibus natus aliquam ad modi omnis at harum iusto eius a? Enim sunt perspiciatis autem iusto nemo, dicta laudantium!"}
    />
    <Cast/>
    <Crew />
  </MovieDetailsPage>
);
