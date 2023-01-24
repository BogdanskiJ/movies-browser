import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        people: [],
        status: "loading",
        query: "",
    },
    reducers: {
        fetchPeopleList: (state) => {
            state.status = "loading";
        },
        fetchPeopleListSuccess: (state, { payload: people }) => {
            state.status = "success";
            state.people = people.results;
        },
        fetchPeopleListError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
} = peopleListSlice.actions;
export const selectPeopleListState = state => state.peopleList;
export const selectPeopleList = state => selectPeopleListState(state).people;
export const selectPeopleListStatus = state => selectPeopleListState(state).status;
export default peopleListSlice.reducer;