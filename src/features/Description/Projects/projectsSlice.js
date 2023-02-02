import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    cast: [],
    crew: [],
    genres: [],
    projectId: null,

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
    },
    setProjectsId: (state, {payload: id}) => {
      state.projectId = id;
    },
  },
});

export const { fetchProjects, setCast, setCrew, fetchGenres, setGenres, setProjectsId } =
  projectsSlice.actions;
export const selectProjectsState = (state) => state.projects;
export const selectProjectsId = state => selectProjectsState(state).projectId;
export default projectsSlice.reducer;
