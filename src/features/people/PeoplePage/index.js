import { PeopleTile } from "../PeopleTile"
import { Info, MainWrapper } from "./styled"


export const People = () => {
    return(
        <>
        <MainWrapper>
            <Info>Popular people</Info>
            <PeopleTile 
            name={"Jakub"}
            />
        </MainWrapper>
        </>
    )
}