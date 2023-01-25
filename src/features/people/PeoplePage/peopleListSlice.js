import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
  },
  reducers: {
    fetchPeopleList: () => {},
    setPeopleList: (state, { payload: people }) => {
      state.people = people;
    },
    setPeopleListSucces: (state, { payload: people }) => {
      state.loading = false;
      state.people = people;
    },
  },
});

export const { fetchPeopleList, setPeopleList, setPeopleListSucces } =
  peopleListSlice.actions;
export const selectPeopleListState = (state) => state.peopleList;
export default peopleListSlice.reducer;
