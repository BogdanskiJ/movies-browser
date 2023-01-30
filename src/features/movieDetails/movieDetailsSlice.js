import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieDetails: [],
        movieId: null,
        status: "loading",
        credits: [],
    },
    reducers: {
        fetchMovieDetails: (state) => {
            state.status = "loading";
        },
        fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
            state.status = "success";
            state.movieDetails = movieDetails;
        },
        fetchMovieDetailsError: (state) => {
            state.status = "error";
        },
        setMovieId: (state, { payload: id }) => {
            state.movieId = id;
        },
        fetchCredits: () => {},
        fetchCreditsSuccess: (state, {payload: credits}) => {
            state.credits = credits;
        },
        fetchCreditsError: (state) => {
            state.credits = null;
        },
    },
});

export const {
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError,
    setMovieId,
    fetchCredits,
    fetchCreditsSuccess,
    fetchCreditsError,
} = movieDetailsSlice.actions;
export const selectMovieDetailsState = state => state.movieDetails;
export const selectMovieDetails = state => selectMovieDetailsState(state).movieDetails;
export const selectMovieId = state => selectMovieDetailsState(state).movieId;
export const selectCredits = state => selectMovieDetailsState(state).credits;
export default movieDetailsSlice.reducer;