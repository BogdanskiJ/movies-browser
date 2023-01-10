import { Tile, Name, Photo, NameBox, Poster } from "./styled"


export const PeopleTile = ({name}) => {
    return(
        <Tile>
            <Poster><Photo></Photo></Poster>
            <NameBox>
            <Name>{name}</Name>
            </NameBox>
        </Tile>
    )
}