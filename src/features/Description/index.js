import { Info, Photo, Tile, Wrapper, Name, Script } from "./styled";
import Information from "./PersonalInfo";
import { useEffect, useState } from "react";

export const Descritpion = () => {
  const [details, setDetails] = useState([]);

  const url_img = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/2?api_key=9515ffc857c67f1558538dad140abb29&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, []);
  return (
    <>
      <Wrapper>
        <Tile>
          <Photo src={url_img+details.profile_path}></Photo>
          <Info>
            <Name>{details.name}</Name>
            <Information birthday={details.birthday} place_of_birth={details.place_of_birth} />
            <Script>{details.biography}</Script>
          </Info>
        </Tile>
      </Wrapper>
    </>
  );
};

export default Descritpion;
