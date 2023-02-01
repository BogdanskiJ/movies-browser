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
    },
    reducers: {
        setPage: (state, { payload: page }) => {
            state.page = page;
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
        fetchCredits: (state) => {
            state.status = "loading";
        },
    },
});

export const { setPage,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
    fetchGenresList,
    fetchCredits,
    fetchGenresListSuccess,
    fetchGenresListError,
} = movieListSlice.actions;
export const selectMovieListState = state => state.movieList;
export const selectMovieList = state => selectMovieListState(state).movies;
export const selectGenresList = state => selectMovieListState(state).genres;
export const selectMovieListStatus = state => selectMovieListState(state).status;
export const selectPage = state => selectMovieListState(state).page;
export const selectCredits = state => selectMovieListState(state).credits;
export default movieListSlice.reducer;