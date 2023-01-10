import { MovieBigPoster, PosterBig } from "./styled";
import { MovieMainPosterRating } from "./movieMainPosterRating";

export const MovieMainPoster = ({ movieTitle, movieRating, votesNumber, maxRating }) => (
    <MovieBigPoster>
        <MovieMainPosterRating
            movieTitle={movieTitle}
            movieRating={movieRating}
            votesNumber={votesNumber}
            maxRating={maxRating}
        />
    </MovieBigPoster>
);
