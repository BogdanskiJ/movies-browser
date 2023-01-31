import { call, put, select, takeLatest } from "redux-saga/effects";
import { getCredits, getMovieDetails } from "../../getApi";
import { fetchCredits, fetchCreditsError, fetchCreditsSuccess, fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess, selectMovieId } from "./movieDetailsSlice";

function* fetchMovieDetailsHandler() {
    try {
        const id = yield select(selectMovieId);
        yield put(fetchCredits());
        const movieDetails = yield call(getMovieDetails, id);
        yield put(fetchMovieDetailsSuccess(movieDetails));
    } catch (error) {
        yield put(fetchMovieDetailsError());
        yield call(alert, "Failed to download data. Try later!");
    };
};

function* fetchCreditsHandler() {
    try {
        const id = yield select(selectMovieId);
        const credits = yield call(getCredits, id);
        yield put(fetchCreditsSuccess(credits));
    } catch (error) {
        yield put(fetchCreditsError());
        yield call(alert, "Failed to download data. Try later!");
    };
};

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
    yield takeLatest(fetchCredits.type, fetchCreditsHandler);
};
