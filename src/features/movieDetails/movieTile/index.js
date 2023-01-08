import { theme } from "../../../theme";
import { MovieDescription, MovieDetail, CountryAndDate, ProductionInfo, MovieRating, MovieTags, MovieTitle, MovieYear, Poster, Rating, Tag, Tail, VotesNumber, MovieProduction, MaxRating, MovieStory } from "./styled";
import poster from "../../../images/poster.png"
import { ReactComponent as Star } from '../../../images/star.svg'


export const MovieTail = ({ movieTitle, movieYear, countryProduction, releaseData, tag1, tag2, tag3, tag4, votesNumber, maxRating, movieRating, movieStory }) => (

    <Tail theme={theme}>
        <Poster src={poster} alt="" />
        <MovieDescription>
            <MovieTitle>
                {movieTitle}
            </MovieTitle>
            <MovieYear>
                {movieYear}
            </MovieYear>
            <MovieProduction>
                <CountryAndDate>Production:
                    <ProductionInfo>{countryProduction}
                    </ProductionInfo>
                </CountryAndDate>
                <CountryAndDate>Release date:
                    <ProductionInfo>{releaseData}
                    </ProductionInfo>
                </CountryAndDate>
            </MovieProduction>
            <MovieTags>
                <Tag>{tag1}</Tag>
                <Tag>{tag2}</Tag>
                <Tag>{tag3}</Tag>
                <Tag>{tag4}</Tag>
            </MovieTags>
            <MovieRating>
                <Star />
                <Rating>{movieRating}</Rating>
                <MaxRating>/{maxRating}</MaxRating>
                <VotesNumber>{votesNumber} votes</VotesNumber>
            </MovieRating>
            <MovieStory>
                {movieStory}
            </MovieStory>
        </MovieDescription>
    </Tail>
);
