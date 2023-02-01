import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getGenres, getMovieList } from "../../getApi";
import { selectPage, fetchGenresList, fetchGenresListError, fetchGenresListSuccess, fetchMovieList, fetchMovieListError, fetchMovieListSuccess } from "./movieListSlice";


function* fetchMovieListHandler() {
    try {
        const page = yield select(selectPage);
        yield delay(500);
        const movies = yield call(getMovieList, page);
        yield put(fetchMovieListSuccess(movies));
    } catch (error) {
        yield put(fetchMovieListError());
        yield call(alert, "Failed to download data. Try later!");
    };
};


function* fetchGenresListHandler() {
    try {
        const genres = yield call(getGenres);
        yield put(fetchGenresListSuccess(genres.genres));
    } catch (error) {
        yield put(fetchGenresListError());
        yield call(alert, "Failed to download data. Try later!");
    };
};

export function* movieListSaga() {
    yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
    yield takeLatest(fetchGenresList.type, fetchGenresListHandler);
};