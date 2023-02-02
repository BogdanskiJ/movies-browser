import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { selectPage, fetchGenresList, fetchGenresListError, fetchGenresListSuccess, fetchMovieList, fetchMovieListError, fetchMovieListSuccess, selectMovieQuery } from "./movieListSlice";

function* fetchMovieListHandler() {
    try {
        const page = yield select(selectPage);
        yield delay(500);
        const movies = yield call(getMovieList, page);
        const query = yield select(selectMovieQuery);
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
    yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
    yield takeLatest(fetchGenresList.type, fetchGenresListHandler);
};