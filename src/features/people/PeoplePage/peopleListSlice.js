import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        people: [],
        query: "",
        totalResults: 0,
        currentPage: 1,
        firstPage: 1,
        lastPage: 500,
        peoplePage: 1,
    },
    reducers: {
        setPeoplePage: (state, { payload: page }) => {
            state.peoplePage = page;
        },
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
        getQuery: (state, { payload: query }) => {
            state.loading = true;
            state.query = query;
        },
        setPage: (state, { payload: page }) => {
            state.page = page
        }
    },
});

export const {
    setPeoplePage,
    fetchPeopleList,
    setPeopleList,
    setPeopleListSucces,
    setPeopleListError,
    getQuery,
    setPage,
} = peopleListSlice.actions;
export const selectPeopleListState = state => state.peopleList;
export const selectPage = state => selectPeopleListState(state).page;
export const selectLoadingStatus = state => selectPeopleListState(state).loading;
export const selectPeopleQuery = state => selectPeopleListState(state).query;
export const selectPeopleTotalResults = state => selectPeopleListState(state).totalResults;
export const selectPeopleList = state => selectPeopleListState(state).people;
export const selectPeoplePage = state => selectPeopleListState(state).peoplePage;
export default peopleListSlice.reducer;
