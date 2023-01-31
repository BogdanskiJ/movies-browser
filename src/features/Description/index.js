import {
  Info,
  Photo,
  Tile,
  Wrapper,
  Name,
  Script,
  Background,
  ReadMoreButton,
} from "./styled";
import Information from "./PersonalInfo";
import { useEffect, useState } from "react";
import { Projects } from "./Projects";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleDetails,
  selectPeopleDetailsState,
  shortenText,
} from "./peopleDetailsSlice";
import ScriptBox from "./ScriptBox";

export const Descritpion = () => {
  const [ReadMore, setReadMore] = useState(false);
  const toggleButton = () => {
    setReadMore((state) => !state);
  };

  const dispatch = useDispatch();

  const url_img = "https://image.tmdb.org/t/p/w500";

  const { details  } = useSelector(selectPeopleDetailsState);

  const biographyText = details.biography ? details.biography.substring(0,800) : "";

  useEffect(() => {
    dispatch(fetchPeopleDetails());
  }, []);

  return (
    <>
      <Background>
        <Wrapper>
          <Tile>
            <Photo src={url_img + details.profile_path}></Photo>
            <Info>
              <Name>{details.name}</Name>
              <Information
                birthday={details.birthday}
                place_of_birth={details.place_of_birth}
              />

              <Script>{ReadMore ? details.biography : biographyText+"..."}</Script>
              <ReadMoreButton onClick={toggleButton}>
                {" "}
                {ReadMore ? "...read less" : "read more"}{" "}
              </ReadMoreButton>
            </Info>
          </Tile>
          <Projects />
        </Wrapper>
      </Background>
    </>
  );
};

export default Descritpion;
