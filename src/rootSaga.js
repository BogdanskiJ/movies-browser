import {all} from "redux-saga/effects"
import { watchFetchPeopleList } from "./features/people/PeoplePage/peopleSaga"


export default function* rootSaga() {
    yield all([
        watchFetchPeopleList(),
    ])
}