import { Tile, Name, Photo, NameBox, Poster, StyledNavLink } from "./styled";


export const PeopleTile = ({ name, profile_path, character, id }) => {
  const url_img = "https://image.tmdb.org/t/p/w500"
  return (
    <Tile>
        <Photo src={url_img + profile_path}></Photo>
        <StyledNavLink to={`/people/${id}`} id={id}>
          <Name>{name}</Name>
        </StyledNavLink>
        <StyledNavLink to={`/people/${id}`} id={id}>
          <Name>{character}</Name>
        </StyledNavLink>
    </Tile>
  );
};
