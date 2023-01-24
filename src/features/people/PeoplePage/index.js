import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../common/pagination";
import { PeopleTile } from "../PeopleTile";
import { fetchPeopleList, selectPeopleList, selectPeopleListStatus } from "./peopleListSlice";
import { Background, Info, MainWrapper, TileWrapper } from "./styled";


export const People = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeopleList);
  const status = useSelector(selectPeopleListStatus);

  useEffect(() => {
    dispatch(fetchPeopleList());
  }, [dispatch]);

  return (
    <>
      <Background>
        <MainWrapper>
          <Info>Popular people</Info>
          <TileWrapper>
            {people.map(person => <PeopleTile
              name={person.name}
              key={person.id}
              id={person.id}
            />)}
          </TileWrapper>
          <Pagination />
        </MainWrapper>
      </Background>
    </>
  );
};

export default People;
