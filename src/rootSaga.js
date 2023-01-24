import { all } from "axios";
import { watchFetchPeopleList } from "./features/people/PeoplePage/peopleListSaga";

export default function* rootSaga() {
    yield all([
        watchFetchPeopleList(),
    ]);
};