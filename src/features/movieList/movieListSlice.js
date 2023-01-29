import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movies: [],
        status: "loading",
        query: "",
        genres: null,
        currentPage: 1,
        firstPage: 1,
        lastPage: 500,
        id: 1,
        page: 1,
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
        fetchGenresList: () => {},
        fetchGenresListSuccess: (state, {payload: genres}) => {
            state.genres = genres;
        },
        fetchGenresListError: (state) => {
            state.genres = null;
        },
    },
});

export const { setCurrentPage,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
    fetchGenresList,
    fetchGenresListSuccess,
    fetchGenresListError,
} = movieListSlice.actions;
export const selectMovieListState = state => state.movieList;
export const selectMovieList = state => selectMovieListState(state).movies;
export const selectGenresList = state => selectMovieListState(state).genres;
export const selectMovieListStatus = state => selectMovieListState(state).status;
export default movieListSlice.reducer;