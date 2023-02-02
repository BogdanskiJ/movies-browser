
import {all} from "redux-saga/effects"
import { watchPeopleDetails } from "./features/Description/peopleDetailsSaga"
import { watchFetchGenres, watchFetchProjects } from "./features/Description/Projects/projectsSaga"

import { movieDetailsSaga } from "./features/movieDetails/movieDetailsSaga";
import { movieListSaga } from "./features/movieList/movieListSaga";
import { watchFetchPeopleList } from "./features/people/PeoplePage/peopleSaga"


export default function* rootSaga() {
    yield all([
        watchFetchPeopleList(),
        watchPeopleDetails(),
        watchFetchProjects(),
        watchFetchGenres(),
         movieListSaga(),
        movieDetailsSaga(),
    ])
}

