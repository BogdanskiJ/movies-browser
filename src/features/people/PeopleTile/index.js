import { Tile, Name, Photo, StyledNavLink } from "./styled";
import emptyPeople from "../../../images/emptyPeople.svg";

export const PeopleTile = ({ name, profile_path, character, id }) => {
  const url_img = "https://image.tmdb.org/t/p/w500";
  return (
    <Tile>
      <Photo
        src={profile_path !== null ? url_img + profile_path : emptyPeople}
      ></Photo>
      <StyledNavLink to={`/people/${id}`} id={id}>
        <Name>{name}</Name>
      </StyledNavLink>
      <StyledNavLink to={`/people/${id}`} id={id}>
        <Name>{character}</Name>
      </StyledNavLink>
    </Tile>
  );
};
