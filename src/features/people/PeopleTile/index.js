import { Tile, Name, Photo } from "./styled"


export const PeopleTile = ({name}) => {
    return(
        <Tile>
            <Photo></Photo>
            <Name>{name}</Name>
        </Tile>
    )
}