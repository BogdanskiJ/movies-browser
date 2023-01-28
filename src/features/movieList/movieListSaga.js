import { call, delay, put, takeLatest } from "@redux-saga/core/effects";
import { getMovieList } from "../../getApi";
import { fetchMovieList, fetchMovieListError, fetchMovieListSuccess } from "./movieListSlice";


function* fetchMovieListHandler() {
    try {
        yield delay(500);
        const movies = yield call(getMovieList);
        yield put(fetchMovieListSuccess(movies));
    } catch (error) {
        yield put(fetchMovieListError());
        yield call(alert, "Failed to download data. Try later!");
    };
};

export function* watchFetchMovieList() {
    yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
};