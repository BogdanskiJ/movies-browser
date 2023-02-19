import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
    status: "loading",
    detailsId: null,
  },
  reducers: {
    fetchPeopleDetails: (state) => {
      state.status = "loading";
    },
    setPeopleDetails: (state, { payload: details }) => {
      state.details = details;
      state.status = "success";
    },
    fetchPeopleDetailsError: (state) => {
      state.status = "error";
    },
    setPeopleId: (state, { payload: id }) => {
      state.detailsId = id;
    },
  },
});

export const {
  fetchPeopleDetails,
  setPeopleDetails,
  setHide,
  fetchPeopleDetailsError,
  setPeopleId,
} = peopleDetailsSlice.actions;

export const selectPeopleDetailsState = (state) => state.peopleDetails;
export const selectPeopleDetailsStatus = (state) =>
  selectPeopleDetailsState(state).status;
export const selectPeopleId = (state) =>
  selectPeopleDetailsState(state).detailsId;
export default peopleDetailsSlice.reducer;
