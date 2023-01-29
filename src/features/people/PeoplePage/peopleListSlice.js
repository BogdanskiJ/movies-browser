import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        query: "",
        totalResults: 0,
    },
    reducers: {
        fetchPeopleList: (state) => { 
            state.loading = true;
        },
        setPeopleListSucces: (state, { payload: people }) => {
            state.people = people;
            state.loading = false;
        },
        setPeopleListError: (state) => {
            state.loading = false;
        },
    },
});

export const { fetchPeopleList, setPeopleList, setPeopleListSucces, setPeopleListError } =
    peopleListSlice.actions;
export const selectPeopleListState = (state) => state.peopleList;
export const selectLoadingStatus = state => selectPeopleListState(state).loading;
export const selectPeopleQuery = state => selectPeopleListState(state).query;
export const selectPeopleTotalResults = state => selectPeopleListState(state).totalResults;
export default peopleListSlice.reducer;
