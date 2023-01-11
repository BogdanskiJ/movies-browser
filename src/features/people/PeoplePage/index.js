<<<<<<< HEAD
import { Pagination } from "../../Pagination";
=======
import Pagination from "../../../common/pagination";
>>>>>>> eee8dc43871a6d631ad7cca1efa2c370335cd0fc
import { PeopleTile } from "../PeopleTile";
import { Info, MainWrapper, TileWrapper } from "./styled";

import { useEffect } from "react";

export const People = () => {
<<<<<<< HEAD
  const getActorsReq = async () => {
    const url =
      "https://api.themoviedb.org/3/person/{person_id}?api_key=9515ffc857c67f1558538dad140abb29&language=en-US";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
  };

  useEffect(() => 
{  getActorsReq()
})

  return (
    <>
      <MainWrapper>
        <Info>Popular people</Info>
        <TileWrapper>
          <PeopleTile name={"Jakub Kedzierski "} />
          <PeopleTile name={"Jakub Kedzierski SSSSS"} />
          <PeopleTile name={"Jakub"} />
          <PeopleTile name={"Jakub Bzaaaas"} />
          <PeopleTile name={"Jakub"} />
          <PeopleTile name={"Jakub"} />
          <PeopleTile name={"Jakub"} />
          <PeopleTile name={"Jakub"} />
        </TileWrapper>
        <Pagination />
      </MainWrapper>
    </>
  );
};

export default People;
=======
    return(
        <>
            <MainWrapper>
                <Info>Popular people</Info>
                <TileWrapper>
                    <PeopleTile
                        name={"Jakub Kedzierski "}
                    />
                    <PeopleTile
                        name={"Jakub Kedzierski SSSSS"}
                    />
                    <PeopleTile
                        name={"Jakub"}
                    />
                    <PeopleTile
                        name={"Jakub Bzaaaas"}
                    />
                    <PeopleTile
                        name={"Jakub"}
                    />
                    <PeopleTile
                        name={"Jakub"}
                    />
                    <PeopleTile
                        name={"Jakub"}
                    />
                    <PeopleTile
                        name={"Jakub"}
                    />
                </TileWrapper>
                <Pagination />
            </MainWrapper>
        </>
    );
};
>>>>>>> eee8dc43871a6d631ad7cca1efa2c370335cd0fc
