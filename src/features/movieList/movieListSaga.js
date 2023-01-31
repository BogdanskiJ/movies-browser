import { call, delay, put, takeLatest } from "@redux-saga/core/effects";
import { getGenres, getMovieList } from "../../getApi";
import { fetchGenresList, fetchGenresListError, fetchGenresListSuccess, fetchMovieList, fetchMovieListError, fetchMovieListSuccess } from "./movieListSlice";


function* fetchMovieListHandler() {
    try {
        yield delay(500);
        const movies = yield call(getMovieList);
        yield put(fetchMovieListSuccess(movies));
    } catch (error) {
        yield put(fetchMovieListError());
    };
};

function* fetchGenresListHandler() {
    try{
        const genres = yield call(getGenres);
        yield put(fetchGenresListSuccess(genres.genres));
    }catch (error) {
        yield put(fetchGenresListError());
    };
};

export function* movieListSaga() {
    yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
    yield takeLatest(fetchGenresList.type, fetchGenresListHandler);
};