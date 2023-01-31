import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPeopleList } from "./getPeopleList";
import { fetchPeopleList, setPeopleList, setPeopleListError, setPeopleListSucces } from "./peopleListSlice";

function* fetchPeopleListHandler() {
  try {
    yield delay(500);
    const peopleList = yield call(getPeopleList);
    yield put(setPeopleListSucces(peopleList.results));
  } catch (error) {
    yield put(setPeopleListError());
  };
};

export function* watchFetchPeopleList() {
  yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler);
};


