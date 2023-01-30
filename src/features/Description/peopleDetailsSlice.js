import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
  },
  reducers: {
    fetchPeopleDetails: () => {},
    setPeopleDetails: (state, {payload: details}) => {
      state.details = details
    }
  },
});

export const { fetchPeopleDetails, setPeopleDetails } =
  peopleDetailsSlice.actions;
export const selectPeopleDetailsState = (state) => state.peopleDetails;
// export const getActorById = (state, actorId) => 
export default peopleDetailsSlice.reducer;
