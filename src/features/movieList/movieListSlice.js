import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movies: [],
        status: "loading",
        query: "",
        currentPage: 1,
        dataFromAPI: {},
        firstPage: 1,
        lastPage: 500,
        id: 1,
    },
    reducers: {
        setCurrentPage: (state, { payload: actions }) => {
            state.currentPage = state.currentPage + actions;
            // console.log(state.currentPage)
        },
        fetchMovieList: (state) => {
            state.status = "loading";
        },
        fetchMovieListSuccess: (state, { payload: movies }) => {
            state.status = "success";
            state.movies = movies.results;
        },
        fetchMovieListError: (state) => {
            state.status = "error";
        },
    },
});

export const { setCurrentPage,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError
} = movieListSlice.actions;
export const selectMovieListState = state => state.movieList;
export const selectMovieList = state => selectMovieListState(state).movies;
export default movieListSlice.reducer;