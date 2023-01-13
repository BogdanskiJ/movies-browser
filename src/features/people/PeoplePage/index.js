import { useEffect, useState } from "react";
import Pagination from "../../../common/pagination";
import { PeopleTile } from "../PeopleTile";
import { Background, Info, MainWrapper, TileWrapper } from "./styled";


export const People = () => {
  const [name, setName] = useState([])

  useEffect(() =>{
    fetch("https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=1")
    .then((res) => res.json())
    .then(data => {
      console.log(data.results)
      setName(data.results)
    })
  }, [])

  return (
    <>
      <Background>
        <MainWrapper>
          <Info>Popular people</Info>
          <TileWrapper>
            {name.map((names) => <PeopleTile name={names} key={names.id} {...names} />)}
          </TileWrapper>
          <Pagination />
        </MainWrapper>
      </Background>
    </>
  );
};

export default People;
