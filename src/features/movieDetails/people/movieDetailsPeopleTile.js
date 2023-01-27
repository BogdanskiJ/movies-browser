import { MovieName, Name, NameBox, Photo, Poster, Tile } from "./styled"
import emptyPeople from "../../../images/emptyPeople.svg";
import { useParams } from "react-router-dom";

export const Cast = ({ name, profile_path, character }) => {

    const url_img = "https://image.tmdb.org/t/p/w500"

    return (
        <Tile>
            <Poster href={`https://www.google.com/search?q=${name}`}>
                <Photo src={(profile_path !== null ? (url_img + profile_path) : emptyPeople)} title={name} />
            </Poster>
            <NameBox>
                <Name href={`https://www.google.com/search?q=${name}`} title={name}>{name}</Name>
                <MovieName>{character}</MovieName>
            </NameBox>
        </Tile>
    )
};