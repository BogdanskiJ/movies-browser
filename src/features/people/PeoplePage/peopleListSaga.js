import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getPeople } from "../../../getApi";
import { fetchPeopleList, fetchPeopleListError, fetchPeopleListSuccess } from "./peopleListSlice";

function* fetchPeopleListHandler() {
    try {
        yield delay(1000);
        const people = yield call(getPeople);
        yield put(fetchPeopleListSuccess(people));
    } catch (error) {
        yield put(fetchPeopleListError());
        yield call(alert, "Failed to download data. Try later!");
    };
};

export function* watchFetchPeopleList() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler);
};