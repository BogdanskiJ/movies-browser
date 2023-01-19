import { useEffect, useState } from "react";
import Pagination from "../../../common/pagination";
import { PeopleTile } from "../PeopleTile";
import { Background, Info, MainWrapper, TileWrapper } from "./styled";

export const People = () => {
  const [actors, setActors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([])

  // useEffect(() =>{
  //   fetch("https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=1")
  //   .then((res) => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setActors(data.results)
  //   })
  // }, [])

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=${currentPage}`
    );
    const data = await response.json();
    setData(data.results);
    setActors(data.results)
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Background>
        <MainWrapper>
          <Info>Popular people</Info>
          <TileWrapper>
            {actors.map((actor) => (
              <PeopleTile name={actor.name} key={actor.id} {...actor} />
            ))}
          </TileWrapper>
          <Pagination currentPage={currentPage}/>
        </MainWrapper>
      </Background>
    </>
  );
};

export default People;
