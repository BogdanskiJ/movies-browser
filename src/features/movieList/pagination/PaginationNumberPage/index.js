import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { theme } from "../../../../theme";
import { selectMovieListState } from "../../movieListSlice";
import { PageNumberBox, Number } from "./styled";

const PaginationPageNumber = () => {
    const { page, lastPage, totalPages } = useSelector(selectMovieListState);
    return (
        <PageNumberBox theme={theme}>
            Page
            <Number>{page ? page : 0}</Number>
            of
            <Number>{totalPages < lastPage ? totalPages : lastPage}</Number>
        </PageNumberBox>
    )
}
export default PaginationPageNumber