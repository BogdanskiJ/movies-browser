import { call, delay, put, takeEvery } from "redux-saga/effects";
import { searchPeople } from "../../../getApi";
import { getPeopleList } from "./getPeopleList";
import { fetchPeopleList, selectPeopleQuery, setPeopleListError, setPeopleListSucces } from "./peopleListSlice";

function* fetchPeopleListHandler() {
  try {
    yield delay(500);
    const query = yield (selectPeopleQuery);
    const peopleList = yield query === "" ? call(getPeopleList) : call(searchPeople, query);
    yield put(setPeopleListSucces(peopleList.results));
  } catch (error) {
    yield put(setPeopleListError());
    yield call(alert, "Something went wrong...");
  };
};

export function* watchFetchPeopleList() {
  yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler);
};


