import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getCredits, getMovieDetails } from "../../getApi";
import { fetchCredits, fetchCreditsError, fetchCreditsSuccess, fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess, selectMovieId } from "./movieDetailsSlice";

function* fetchMovieDetailsHandler() {
    try {
        const id = yield select(selectMovieId);
        yield put(fetchCredits());
        yield delay(500);
        const movieDetails = yield call(getMovieDetails, id);
        yield put(fetchMovieDetailsSuccess(movieDetails));
    } catch (error) {
        yield put(fetchMovieDetailsError());
    };
};

function* fetchCreditsHandler() {
    try {
        const id = yield select(selectMovieId);
        const movieDetails = yield call(getCredits, id);
        yield put(fetchCreditsSuccess(movieDetails));
    } catch (error) {
        yield put(fetchCreditsError());
    };
};

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
    yield takeLatest(fetchCredits.type, fetchCreditsHandler);
};
