import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
    biography: [],
  },
  reducers: {
    fetchPeopleDetails: () => {},
    setPeopleDetails: (state, {payload: details}) => {
      state.details = details
    },
    setBioDetails: (state, {payload: biography}) => {
      state.biography = biography
    },
  },
});

export const { fetchPeopleDetails, setPeopleDetails, setBioDetails, shortenText } =
  peopleDetailsSlice.actions;
export const selectPeopleDetailsState = (state) => state.peopleDetails;
// export const getActorById = (state, actorId) => 
export default peopleDetailsSlice.reducer;
