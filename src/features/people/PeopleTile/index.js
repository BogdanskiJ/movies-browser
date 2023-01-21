import { Tile, Name, Photo, NameBox, Poster } from "./styled";


export const PeopleTile = ({ name, profile_path, character }) => {
  const url_img = "https://image.tmdb.org/t/p/w500"
  return (
    <Tile>
      <Poster>
        <Photo src={url_img+profile_path}></Photo>
      </Poster>
      <NameBox>
        <Name>{name}</Name>
        <Name>{character}</Name>
      </NameBox>
    </Tile>
  );
};
