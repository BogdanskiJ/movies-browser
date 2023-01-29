import {all} from "redux-saga/effects"
import { movieListSaga } from "./features/movieList/movieListSaga";
import { watchFetchPeopleList } from "./features/people/PeoplePage/peopleSaga"


export default function* rootSaga() {
    yield all([
        watchFetchPeopleList(),
        movieListSaga(),
    ]);
};