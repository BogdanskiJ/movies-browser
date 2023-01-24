import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
    },
    reducers: {
        fetchPeopleList: () => {},
        setPeopleList: (state, {payload: people}) => {
            state.people = people 
        }
    },
});

export const { fetchPeopleList, setPeopleList } = peopleListSlice.actions;
export const selectPeopleListState = state => state.peopleList;
export default peopleListSlice.reducer;