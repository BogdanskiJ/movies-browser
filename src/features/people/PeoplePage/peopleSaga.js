import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { searchPeople } from "../../../getApi";
import { getPeopleList } from "./getPeopleList";
import { fetchPeopleList, selectPeoplePage, selectPeopleQuery, setPeopleListError, setPeopleListSucces } from "./peopleListSlice";

function* fetchPeopleListHandler() {
  try {
    const peoplePage = yield select(selectPeoplePage);
    const query = yield select(selectPeopleQuery);
    yield delay(500);
    const people = yield !query ? call(getPeopleList, peoplePage) : call(searchPeople, query);
    yield put(setPeopleListSucces(people));
  } catch (error) {
    yield put(setPeopleListError());
  };
};

export function* watchFetchPeopleList() {
  yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler);
};

