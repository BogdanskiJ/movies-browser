import { Pagination } from "../../Pagination"
import { PeopleTile } from "../PeopleTile"
import { Info, MainWrapper, TileWrapper } from "./styled"


export const People = () => {
    return(
        <>
        <MainWrapper>
            <Info>Popular people</Info>
            <TileWrapper>
            <PeopleTile 
            name={"Jakub Kedzierski "}
            />
            <PeopleTile 
            name={"Jakub Kedzierski SSSSS"}
            />
            <PeopleTile 
            name={"Jakub"}
            />
            <PeopleTile 
            name={"Jakub Bzaaaas"}
            />
            <PeopleTile 
            name={"Jakub"}
            />
            <PeopleTile 
            name={"Jakub"}
            />
            <PeopleTile 
            name={"Jakub"}
            />
            <PeopleTile 
            name={"Jakub"}
            />
            </TileWrapper>
            <Pagination />
        </MainWrapper>
        </>
    )
}