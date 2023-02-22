import { call, debounce, delay, put, select } from "redux-saga/effects";
import { searchPeople } from "../../../getApi";
import { getPeopleList } from "../../../getApi"
import {
  fetchPeopleList,
  selectPeoplePage,
  selectPeopleQuery,
  setPeopleListError,
  setPeopleListSucces,
} from "./peopleListSlice";

function* fetchPeopleListHandler() {
  try {
    const page = yield select(selectPeoplePage);
    const query = yield select(selectPeopleQuery);
    yield delay(500);
    const people = yield !query
      ? call(getPeopleList, page)
      : call(searchPeople, query, page);
    yield put(setPeopleListSucces(people));
  } catch (error) {
    yield put(setPeopleListError());
  }
}

export function* watchFetchPeopleList() {
  yield debounce(800, fetchPeopleList.type, fetchPeopleListHandler);
}
