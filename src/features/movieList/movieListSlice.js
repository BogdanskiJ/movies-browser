import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movies: [],
        status: "loading",
        query: "",
    },
    reducers: {

    },
});

export const selectMovieListState = state => state.movieList;
export default movieListSlice.reducer;