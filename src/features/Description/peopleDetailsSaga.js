import { call, put, select, takeEvery } from "redux-saga/effects";
import { getDetails } from "./getDetails";
import {
  fetchPeopleDetails,
  fetchPeopleDetailsError,
  selectPeopleId,
  setPeopleDetails,
} from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler() {
  try {
    const id = yield select(selectPeopleId);
    const peopleDetails = yield call(getDetails, id);
    yield put(setPeopleDetails(peopleDetails));
  } catch (error) {
    yield put(fetchPeopleDetailsError());
  }
}

export function* watchPeopleDetails() {
  yield takeEvery(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}
