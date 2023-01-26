import { Tile, Name, Photo, NameBox, Poster, StyledNavLink } from "./styled";


export const PeopleTile = ({ name, profile_path, character, id }) => {
  const url_img = "https://image.tmdb.org/t/p/w500"
  return (
    <Tile>
      <Poster>
        <Photo src={url_img + profile_path}></Photo>
      </Poster>
      <NameBox>
        <StyledNavLink to={`/people/${id}`} id={id}>
          <Name>{name}</Name>
        </StyledNavLink>
        <StyledNavLink to={`/people/${id}`} id={id}>
          <Name>{character}</Name>
        </StyledNavLink>
      </NameBox>
    </Tile>
  );
};
