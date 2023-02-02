import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    cast: [],
    crew: [],
    genres: [],
  },
  reducers: {
    fetchProjects: () => {},
    setCast: (state, {payload: cast}) => {
        state.cast = cast
    },
    setCrew: (state, {payload:crew}) => {
        state.crew = crew
    },
    fetchGenres: () => {},
    setGenres: (state, {payload:genres}) => {
        state.genres = genres
    }
  },
});

export const { fetchProjects, setCast, setCrew, fetchGenres, setGenres } =
  projectsSlice.actions;
export const selectProjectsState = (state) => state.projects;
export default projectsSlice.reducer;
