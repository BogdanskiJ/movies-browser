import { Info, Photo, Tile, Wrapper, Name, Script, Background } from "./styled";
import Information from "./PersonalInfo";
import { useEffect, useState } from "react";
import { Projects } from "./Projects";
import Movie from "../movieList/Movie";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleDetails,
  selectPeopleDetailsState,
} from "./peopleDetailsSlice";
import { fetchProjects } from "./Projects/projectsSlice";

export const Descritpion = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const url_img = "https://image.tmdb.org/t/p/w500";

  const { details } = useSelector(selectPeopleDetailsState);

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
              <Script>{details.biography}</Script>
            </Info>
          </Tile>
          <Projects />
        </Wrapper>
      </Background>
    </>
  );
};

export default Descritpion;
