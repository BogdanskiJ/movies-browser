import {
  Info,
  Photo,
  Tile,
  Wrapper,
  Name,
  Script,
  Background,
  ReadMoreButton,
  BigBox,
} from "./styled";
import Information from "./PersonalInfo";
import { useEffect, useState } from "react";
import { Projects } from "./Projects";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleDetails,
  selectPeopleDetailsState,
  selectPeopleDetailsStatus,
} from "./peopleDetailsSlice";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";

export const Descritpion = () => {
  const [ReadMore, setReadMore] = useState(false);
  const toggleButton = () => {
    setReadMore((state) => !state);
  };

  const dispatch = useDispatch();

  const url_img = "https://image.tmdb.org/t/p/w500";

  const { details } = useSelector(selectPeopleDetailsState);
  const status = useSelector(selectPeopleDetailsStatus);

  const biographyText = details.biography
    ? details.biography.substring(0, 1100)
    : "";

  useEffect(() => {
    dispatch(fetchPeopleDetails());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <LoadingPage title={'Search results for "People Details"'} />
      ) : status === "error" ? (
        <ErrorPage />
      ) : (
        <Background>
          <Wrapper>
            <Tile>
              <Photo src={url_img + details.profile_path}></Photo>
              {/* <BigBox> */}
                <Info>
                  <Name>{details.name}</Name>
                  <Information
                    birthday={details.birthday}
                    place_of_birth={details.place_of_birth}
                  />
                </Info>
              {/* </BigBox> */}
              <Script>
                {ReadMore ? details.biography : biographyText + "..."}
                <ReadMoreButton onClick={toggleButton}>
                  {" "}
                  {ReadMore ? "...read less" : "read more"}{" "}
                </ReadMoreButton>
              </Script>
            </Tile>
            <Projects />
          </Wrapper>
        </Background>
      )}
    </>
  );
};

export default Descritpion;
