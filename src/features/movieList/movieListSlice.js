import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movies: [],
        status: "loading",
        query: "",
        currentPage: 1,
        dataFromAPI: {},
        firstPage:1,
        lastPage: 500,
        id:1,
        page:1,
    },
    reducers: {
        // setCurrentPage: (state, { payload: actions }) => {
        //     state.currentPage = state.currentPage + actions;
        // },
    },
});

export const {  } = movieListSlice.actions;
export const selectMovieListState = state => state.movieList;
export default movieListSlice.reducer;