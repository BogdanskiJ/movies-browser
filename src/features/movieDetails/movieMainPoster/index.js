import { MovieBigPoster } from "./styled";
import { MovieMainPosterRating } from "./movieMainPosterRating";

export const MovieMainPoster = ({ movieTitle, movieRating, votesNumber, maxRating, movieBackgroundPosterW1280 }) => (
    <MovieBigPoster
    movieBackgroundPosterW1280={movieBackgroundPosterW1280}
    >
        <MovieMainPosterRating
            movieTitle={movieTitle}
            movieRating={movieRating}
            votesNumber={votesNumber}
            maxRating={maxRating}
        />
    </MovieBigPoster>
);
