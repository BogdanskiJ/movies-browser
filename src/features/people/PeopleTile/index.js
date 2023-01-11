import { Tile, Name, Photo, NameBox, Poster } from "./styled";


export const PeopleTile = ({name}) => {

    const getActorsReq = async () => {
        const url = 'https://api.themoviedb.org/3/person/{person_id}?api_key=9515ffc857c67f1558538dad140abb29&language=en-US'
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson)
    }


    return(
        <Tile>
            <Poster><Photo></Photo></Poster>
            <NameBox>
            <Name>{name}</Name>
            </NameBox>
        </Tile>
    );
};