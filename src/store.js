import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./features/movieList/movieListSlice";
import movieDetailsReducer from "./features/movieDetails/movieDetailsSlice";
import peopleListReducer from "./features/people/PeoplePage/peopleListSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        movieDetails: movieDetailsReducer,
        peopleList: peopleListReducer,
    },
    middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga)

export default store;
