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
        fetchCredits: (state) => {
            state.status = "loading";
        },
        fetchCreditsSuccess: (state, { payload: credits }) => {
            state.credits = credits;
        },
        fetchCreditsError: (state) => {
            state.status = "error";
        },
        goOnTop: () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
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
    goOnTop,
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = state => state.movieDetails;
export const selectMovieDetails = state => selectMovieDetailsState(state).movieDetails;
export const selectMovieId = state => selectMovieDetailsState(state).movieId;
export const selectCredits = state => selectMovieDetailsState(state).credits;
export const selectMovieDetailStatus = state => selectMovieDetailsState(state).status;
export default movieDetailsSlice.reducer;