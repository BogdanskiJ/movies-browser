import { MovieName, Name, NameBox, Photo, Poster, Tile } from "./styled"
import emptyPeople from "../../../images/emptyPeople.svg";

export const Cast = ({ name, profile_path, character, id }) => {
    const url_img = "https://image.tmdb.org/t/p/w500"

    return (
        <Tile>
            <Poster to={`/people/${id}`}>
                <Photo src={(profile_path !== null ? (url_img + profile_path) : emptyPeople)} title={name} />
            </Poster>
            <NameBox>
                <Name to={`/people/${id}`} title={name}>{name}</Name>
                <MovieName>{character}</MovieName>
            </NameBox>
        </Tile>
    )
};