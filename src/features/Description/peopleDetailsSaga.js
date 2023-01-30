import { call, put, takeEvery } from "redux-saga/effects";

import { getDetails } from "./getDetails";
import { fetchPeopleDetails, setPeopleDetails } from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler() {
    try{
        const peopleDetails = yield call(getDetails);
        yield put(setPeopleDetails(peopleDetails))
    } catch(error) {
        yield call (alert, "cos poszlo nie tak")
    }
}

export function* watchPeopleDetails(){
    yield takeEvery(fetchPeopleDetails.type, fetchPeopleDetailsHandler)
}