import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    cast: [],
    crew: [],
  },
  reducers: {
    fetchProjects: () => {},
    setCast: (state, {payload: cast}) => {
        state.cast = cast
    },
    setCrew: (state, {payload:crew}) => {
        state.crew = crew
    }
  },
});

export const { fetchProjects, setCast, setCrew } =
  projectsSlice.actions;
export const selectProjectsState = (state) => state.projects;
export default projectsSlice.reducer;
