import { useEffect, useState } from "react";
import Pagination from "../../../common/pagination";
import { PeopleTile } from "../PeopleTile";
import { Background, Info, MainWrapper, TileWrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectPeopleListState } from "./peopleListSlice";
import { useDispatch } from "react-redux";

export const People = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const { people } = useSelector(selectPeopleListState);
  const dispatch = useDispatch();

  // const getData = async () => {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=${currentPage}`
  //   );
  //   const data = await response.json();
  //   setActors(data.results);
  //   setCurrentPage(response);
  //   console.log(data.total_results);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Background>
        <MainWrapper>
          <Info>Popular people</Info>
          <TileWrapper>
            {people.map((actor) => (
              <PeopleTile name={actor.name} key={actor.id} {...actor} />
            ))}
          </TileWrapper>
          <Pagination currentPage={currentPage} />
        </MainWrapper>
      </Background>
    </>
  );
};

export default People;
