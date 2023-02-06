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
        credits: [],
        totalResults: 0,
        totalPages: 0,
    },
    reducers: {
        setPage: (state, { payload: page }) => {
            page === undefined ? state.page = state.firstPage : state.page = page;
        },
        fetchMovieList: (state) => {
            state.status = "loading";
        },
        fetchMovieListSuccess: (state, { payload: movies }) => {
            state.status = "success";
            state.movies = movies.results;
            state.totalResults = movies.total_results;
            state.totalPages = movies.total_pages;
        },
        fetchMovieListError: (state) => {
            state.status = "error";
        },
        fetchGenresList: () => { },
        fetchGenresListSuccess: (state, { payload: genres }) => {
            state.genres = genres;
        },
        fetchGenresListError: (state) => {
            state.genres = null;
        },
        fetchCredits: (state) => {
            state.status = "loading";
        },
        getQuery: (state, { payload: query }) => {
            state.loading = true;
            state.query = query;
            state.page = state.firstPage;
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
    setPage,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
    fetchGenresList,
    fetchCredits,
    fetchGenresListSuccess,
    fetchGenresListError,
    getQuery,
    goOnTop,
} = movieListSlice.actions;

export const selectMovieListState = state => state.movieList;
export const selectMovieList = state => selectMovieListState(state).movies;
export const selectGenresList = state => selectMovieListState(state).genres;
export const selectMovieListStatus = state => selectMovieListState(state).status;
export const selectPage = state => selectMovieListState(state).page;
export const selectCredits = state => selectMovieListState(state).credits;
export const selectMovieQuery = state => selectMovieListState(state).query;
export const selectMovieTotalResults = state => selectMovieListState(state).totalResults;
export default movieListSlice.reducer;