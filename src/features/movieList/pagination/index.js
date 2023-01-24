import React from "react";
import { theme } from "../../../theme";
import { NextArrowMinView, PaginationBox, PaginationButtonText, PaginationLeftButton, PaginationLeftButtonMin, PaginationLeftButtonPreviousPage, PaginationRightButton, PaginationRightButtonLastPage, PaginationRightButtonMax, PaginationRightButtonNextPage, PrevArrowMinView } from "./styled";
import { ReactComponent as NextArrow } from '../../../images/nextArrow.svg';
import { ReactComponent as PrevArrow } from '../../../images/prevArrow.svg';
import PaginationPageNumber from "./PaginationNumberPage";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieListState } from "../movieListSlice";
import { setCurrentPage } from "../../../features/movieList/movieListSlice";

const Pagination = () => {
    const dispatch = useDispatch();
    const { lastPage, currentPage } = useSelector(selectMovieListState);

    return (
        <PaginationBox theme={theme}>
            <PaginationLeftButtonMin onClick={() => dispatch(setCurrentPage(1 - currentPage))}>
                <PrevArrow />
                <PrevArrow />
            </PaginationLeftButtonMin>
            <PaginationLeftButtonPreviousPage onClick={() => dispatch(setCurrentPage(1 - currentPage))}>
                <PrevArrow />
                <PaginationButtonText>
                    First
                </PaginationButtonText>
            </PaginationLeftButtonPreviousPage>
            <PaginationLeftButton
                disabled={currentPage === 1}
                onClick={() => dispatch(setCurrentPage(-1))}>
                <PrevArrow />
                <PaginationButtonText>
                    Previous
                </PaginationButtonText>
            </PaginationLeftButton>
            <PaginationPageNumber />
            <PaginationRightButton
                disabled={currentPage === 500}
                onClick={() => dispatch(setCurrentPage(+1))}>
                <PaginationButtonText>
                    Next
                </PaginationButtonText>
                <NextArrow />
            </PaginationRightButton>
            <PaginationRightButtonNextPage onClick={() => dispatch(setCurrentPage(lastPage - currentPage))}>
                <PaginationButtonText>
                    Last
                </PaginationButtonText>
                <NextArrow />
            </PaginationRightButtonNextPage>
            <PaginationRightButtonMax onClick={() => dispatch(setCurrentPage(lastPage - currentPage))}>
                <NextArrow />
                <NextArrow />
            </PaginationRightButtonMax>
        </PaginationBox>
    );
};
export default Pagination;