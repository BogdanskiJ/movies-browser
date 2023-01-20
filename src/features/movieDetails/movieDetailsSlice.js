import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieDetails: [],
        movieId: null,
        status: "loading",
    },
    reducers: {
        setMovieId: (state, { payload: id }) => {
            state.movieId = id;
        },
    },
});

export const { setMovieId } = movieDetailsSlice.actions;
export const selectMovieDetailsState = state => state.movieDetails;
export default movieDetailsSlice.reducer;