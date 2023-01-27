import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { theme } from "../../../../theme";
import { selectMovieListState } from "../../movieListSlice";
import { PageNumberBox, Number } from "./styled";

const PaginationPageNumber = () => {
    const { lastPage } = useSelector(selectMovieListState);
    const { page } = useParams();
    return (
        <PageNumberBox theme={theme}>
            Page
            <Number>{page !== undefined ? page : 1}</Number>
            of
            <Number>{lastPage}</Number>
        </PageNumberBox>
    )
}
export default PaginationPageNumber