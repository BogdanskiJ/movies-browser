import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./features/movieList/movieListSlice";
import movieDetailsReducer from "./features/movieDetails/movieDetailsSlice";
import peopleListReducer from "./features/people/PeoplePage/peopleListSlice";

export default configureStore({
    reducer: {
        movieList: movieListReducer,
        movieDetails: movieDetailsReducer,
        peopleList: peopleListReducer,
    },
});