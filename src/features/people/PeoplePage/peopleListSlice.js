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
            state.people = people.results;
            state.loading = false;
            state.totalResults = people.total_results;
        },
        setPeopleListError: (state) => {
            state.loading = false;
        },
        getQuery: (state, {payload: query}) => {
            state.loading = true;
            state.query = query;
        },
    },
});

export const { 
    fetchPeopleList, 
    setPeopleList, 
    setPeopleListSucces, 
    setPeopleListError ,
    getQuery,
} = peopleListSlice.actions;
export const selectPeopleListState = state => state.peopleList;
export const selectLoadingStatus = state => selectPeopleListState(state).loading;
export const selectPeopleQuery = state => selectPeopleListState(state).query;
export const selectPeopleTotalResults = state => selectPeopleListState(state).totalResults;
export const selectPeopleList = state => selectPeopleListState(state).people;
export default peopleListSlice.reducer;
