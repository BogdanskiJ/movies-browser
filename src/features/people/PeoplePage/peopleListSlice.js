import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        people: [],
        status: "loading",
        query: "",
    },
    reducers: {

    },
});

export const selectPeopleListState = state => state.peopleList;
export default peopleListSlice.reducer;