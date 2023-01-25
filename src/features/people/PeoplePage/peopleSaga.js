import { call, put, takeEvery } from "redux-saga/effects";
import { getPeopleList } from "./getPeopleList";
import { fetchPeopleList, setPeopleList, setPeopleListSucces } from "./peopleListSlice";

function* fetchPeopleListHandler() {
  try {
    const peopleList = yield call(getPeopleList);
    yield put(setPeopleListSucces(peopleList.results));
  } catch (error) {
    yield call(alert, "cos poszlo nie tak");
  }
}

export function* watchFetchPeopleList() {
  yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler);
}


