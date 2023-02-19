import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./features/movieList/movieListSlice";
import movieDetailsReducer from "./features/movieDetails/movieDetailsSlice";
import peopleDetailsReducer from "./features/Description/peopleDetailsSlice";
import peopleListReducer from "./features/people/PeoplePage/peopleListSlice";
import projectsReducer from "./features/Description/Projects/projectsSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    movieDetails: movieDetailsReducer,
    peopleList: peopleListReducer,
    peopleDetails: peopleDetailsReducer,
    projects: projectsReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;