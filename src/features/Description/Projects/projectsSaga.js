import { call, put, select, takeEvery } from "redux-saga/effects";
import { getGenres } from "../../../getApi";
import { getProjects } from "../../../getApi";
import { fetchProjects, setCast, setCrew, fetchGenres, setGenres, selectProjectsId } from "./projectsSlice";

function* fetchProjectsHandler() {
  try {
    const id = yield select(selectProjectsId);
    const projects = yield call(getProjects, id);

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