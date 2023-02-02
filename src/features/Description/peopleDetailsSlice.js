import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
    status: "loading",
  },
  reducers: {
    fetchPeopleDetails: (state) => {
      state.status = "loading";
    },
    setPeopleDetails: (state, {payload: details}) => {
      state.details = details;
      state.status = "success";
    },
    fetchPeopleDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchPeopleDetails, setPeopleDetails, setHide, fetchPeopleDetailsError } = peopleDetailsSlice.actions;
export const selectPeopleDetailsState = (state) => state.peopleDetails;
export const selectPeopleDetailsStatus = state => selectPeopleDetailsState(state).status;
// export const getActorById = (state, actorId) => 
export default peopleDetailsSlice.reducer;
