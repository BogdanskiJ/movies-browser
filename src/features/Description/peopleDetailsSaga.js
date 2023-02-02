import { call, put, takeEvery } from "redux-saga/effects";
import { getDetails } from "./getDetails";
import { fetchPeopleDetails, fetchPeopleDetailsError, setPeopleDetails } from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler() {
  try {
    const peopleDetails = yield call(getDetails);
    yield put(setPeopleDetails(peopleDetails));
  } catch (error) {
    yield put(fetchPeopleDetailsError());
  }
}

export function* watchPeopleDetails() {
  yield takeEvery(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}
