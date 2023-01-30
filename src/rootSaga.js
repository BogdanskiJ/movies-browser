import { all } from "redux-saga/effects"
import { movieDetailsSaga } from "./features/movieDetails/movieDetailsSaga";
import { movieListSaga } from "./features/movieList/movieListSaga";
import { watchFetchPeopleList } from "./features/people/PeoplePage/peopleSaga"


export default function* rootSaga() {
    yield all([
        watchFetchPeopleList(),
        movieListSaga(),
        movieDetailsSaga(),
    ]);
};