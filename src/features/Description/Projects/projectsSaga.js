import { call, put, takeEvery } from "redux-saga/effects";
import { getGenres } from "./getGenres";
import { getProjects } from "./getProjects";
import { fetchProjects, setCast, setCrew, fetchGenres, setGenres } from "./projectsSlice";

function* fetchProjectsHandler() {
  try {
    const projects = yield call(getProjects);

    yield put(setCast(projects.cast));
    yield put(setCrew(projects.crew));
  } catch (error) {}
}

export function* watchFetchProjects() {
  yield takeEvery(fetchProjects.type, fetchProjectsHandler);
}

function* fetchGenresHandler() {
    try {
        const genres = yield call(getGenres);
        yield put(setGenres(genres.genres))
    } catch (error)
    {}
}

export function* watchFetchGenres() {
    yield takeEvery(fetchGenres.type, fetchGenresHandler)
}