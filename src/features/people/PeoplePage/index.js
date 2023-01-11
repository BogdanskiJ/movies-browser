
import Pagination from "../../../common/pagination";
import { PeopleTile } from "../PeopleTile";
import { Background, Info, MainWrapper, TileWrapper } from "./styled";


export const People = () => {

  return (
    <>
    <Background>
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
    </Background>
    </>
  );
};

export default People;
