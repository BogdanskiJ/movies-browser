import React from "react";
import { useSelector } from "react-redux";
import { theme } from "../../../../theme";
import { selectMovieListState } from "../../movieListSlice";
import { PageNumberBox, Number } from "./styled";

const PaginationPageNumber = () => {
    const { lastPage, currentPage } = useSelector(selectMovieListState);
    return (
        <PageNumberBox theme={theme}>
            Page
            <Number>{currentPage}</Number>
            of
            <Number>{lastPage}</Number>
        </PageNumberBox>
    )
}
export default PaginationPageNumber
