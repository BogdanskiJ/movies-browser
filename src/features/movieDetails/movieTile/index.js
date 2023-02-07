import { theme } from "../../../theme";
import { MovieDescription, CountryAndDate, ProductionInfo, MovieRating, MovieTags, MovieTitle, MovieYear, Poster, Rating, Tag, Tail, VotesNumber, MovieProduction, MaxRating, MovieStory, PosterBox, StarBox, Production, ReleaseData } from "./styled";
import { ReactComponent as Star } from '../../../images/star.svg'

export const MovieTail = ({ movieTitle, movieYear, releaseData, votesNumber, maxRating, movieRating, movieStory, movieTilePoster, countryProductionArray, tagArray }) => {

  return (

    <Tail theme={theme}>
      <PosterBox>
        <Poster src={movieTilePoster} title={movieTitle} alt="" />
      </PosterBox>
      <MovieDescription>
        <MovieTitle>
          {movieTitle}
        </MovieTitle>
        <MovieYear
          none={!movieYear}
        >
          {movieYear.slice(0, 4)}
        </MovieYear>
        <MovieProduction>
          <CountryAndDate><Production>Production:</Production>
            {(countryProductionArray !== undefined ? (countryProductionArray.map(country => <ProductionInfo key={country.name}>{country.name}</ProductionInfo>)) : (""))
            }
          </CountryAndDate>
          <CountryAndDate><ReleaseData>Release date:</ReleaseData>
            <ProductionInfo>{releaseData}
            </ProductionInfo>
          </CountryAndDate>
        </MovieProduction>
        <MovieTags>
          {(tagArray !== undefined ? (tagArray.map(tag => <Tag key={tag.id}>{tag.name}</Tag>)) : (""))
          }
        </MovieTags>
        <MovieRating>
          {(movieRating === 0 || votesNumber === 0) ?
            "No votes yet" :
            <>
              <StarBox>
                <Star />
              </StarBox>
              <Rating>{movieRating}</Rating>
              <MaxRating>/{maxRating}</MaxRating>
              <VotesNumber>{votesNumber} votes</VotesNumber>
            </>
          }
        </MovieRating>
      </MovieDescription>
      <MovieStory>
        {movieStory}
      </MovieStory>
    </Tail>
  );
};