import { theme } from "../../../theme";
import { MovieDescription, MovieDetail, CountryAndDate, ProductionInfo, MovieRating, MovieTags, MovieTitle, MovieYear, Poster, Rating, Tag, Tail, VotesNumber, MovieProduction, MaxRating, MovieStory, PosterBox, StarBox, Production, ReleaseData } from "./styled";
import poster from "../../../images/poster.png"
import { ReactComponent as Star } from '../../../images/star.svg'

export const MovieTail = ({ movieTitle, movieYear, countryProduction, releaseData, tag1, tag2, tag3, votesNumber, maxRating, movieRating, movieStory }) => (

    <Tail theme={theme}>
        <PosterBox>
            <Poster src={poster} alt="" />
        </PosterBox>
        <MovieDescription>
            <MovieTitle>
                {movieTitle}
            </MovieTitle>
            <MovieYear>
                {movieYear}
            </MovieYear>
            <MovieProduction>
                <CountryAndDate><Production>Production:</Production>
                    <ProductionInfo>{countryProduction}
                    </ProductionInfo>
                </CountryAndDate>
                <CountryAndDate><ReleaseData>Release date:</ReleaseData>
                    <ProductionInfo>{releaseData}
                    </ProductionInfo>
                </CountryAndDate>
            </MovieProduction>
            <MovieTags>
                <Tag>{tag1}</Tag>
                <Tag>{tag2}</Tag>
                <Tag>{tag3}</Tag>
            </MovieTags>
            <MovieRating>
                <StarBox>
                    <Star/>
                </StarBox>
                <Rating>{movieRating}</Rating>
                <MaxRating>/{maxRating}</MaxRating>
                <VotesNumber>{votesNumber} votes</VotesNumber>
            </MovieRating>
        </MovieDescription>
        <MovieStory>
            {movieStory}
        </MovieStory>
    </Tail>
);
