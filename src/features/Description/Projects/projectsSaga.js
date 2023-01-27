import { call, put, takeEvery } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import { fetchProjects, setCast, setCrew } from "./projectsSlice";

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
