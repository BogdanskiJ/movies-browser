import { call, debounce, delay, put, select } from "redux-saga/effects";
import { selectPage, fetchGenresList, fetchGenresListError, fetchGenresListSuccess, fetchMovieList, fetchMovieListError, fetchMovieListSuccess, selectMovieQuery } from "./movieListSlice";
import { getGenres, getMovieList, searchMovies } from "../../getApi";

function* fetchMovieListHandler() {
    try {
        const page = yield select(selectPage);
        const query = yield select(selectMovieQuery);
        yield delay(500);
        const movies = yield !query ? call(getMovieList, page) : call(searchMovies, query, page);
        yield put(fetchMovieListSuccess(movies));
    } catch (error) {
        yield put(fetchMovieListError());
    };
};

function* fetchGenresListHandler() {
    try {
        const genres = yield call(getGenres);
        yield put(fetchGenresListSuccess(genres.genres));
    } catch (error) {
        yield put(fetchGenresListError());
    };
};

export function* movieListSaga() {
    yield debounce(800, fetchMovieList.type, fetchMovieListHandler);
    yield debounce(800, fetchGenresList.type, fetchGenresListHandler);
};