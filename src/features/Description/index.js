import { Info, Photo, Tile, Wrapper, Name, Script } from "./styled";
import Information from "./PersonalInfo";

export const Descritpion = () => {
  return (
    <>
      <Wrapper>
        <Tile>
          <Photo></Photo>
          <Info>
            <Name>Liu Yifei</Name>
            <Information />
            <Script>
              Liu Yifei was born in Wuhan, Hubei, Province of China on August
              25th, 1987. She began modeling at the age of 8 and was trained in
              singing, dancing and the piano. Moving to the United States at 10
              with her mother, Liu lived there for four years.
            </Script>
          </Info>
        </Tile>
      </Wrapper>
    </>
  );
};
