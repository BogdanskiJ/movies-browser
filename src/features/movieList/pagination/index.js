import React from "react";
import { theme } from "../../../theme";
import { NextArrowMinView, PaginationBox, PaginationButtonText, PaginationLeftButton, PaginationLeftButtonMin, PaginationLeftButtonPreviousPage, PaginationRightButton, PaginationRightButtonLastPage, PaginationRightButtonMax, PaginationRightButtonNextPage, PrevArrowMinView } from "./styled";
import { ReactComponent as NextArrow } from '../../../images/nextArrow.svg';
import { ReactComponent as PrevArrow } from '../../../images/prevArrow.svg';
import PaginationPageNumber from "./PaginationNumberPage";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieListState } from "../movieListSlice";
import { setCurrentPage } from "../../../features/movieList/movieListSlice";
import { useParams } from "react-router";

const Pagination = () => {
    const dispatch = useDispatch();
    const { lastPage, currentPage } = useSelector(selectMovieListState);

    return (
        <PaginationBox theme={theme}>
            <PaginationLeftButtonMin
                disabled={currentPage === 1}
                onClick={() => dispatch(setCurrentPage(1 - currentPage))}>
                {(currentPage === 1) ?
                    (<>
                        <PrevArrow fill="#7E839A" />
                        <PrevArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <PrevArrow fill="#0044CC" />
                        <PrevArrow fill="#0044CC" />
                    </>)
                }
            </PaginationLeftButtonMin>

            <PaginationLeftButtonPreviousPage
                disabled={currentPage === 1}
                onClick={() => dispatch(setCurrentPage(1 - currentPage))}>
                {(currentPage === 1) ?
                    (<>
                        <PrevArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <PrevArrow fill="#0044CC" />
                    </>)
                }
                <PaginationButtonText>
                    First
                </PaginationButtonText>
            </PaginationLeftButtonPreviousPage>
            <PaginationLeftButton
                disabled={currentPage === 1}
                onClick={() => dispatch(setCurrentPage(-1))}>
                {(currentPage === 1) ?
                    (<>
                        <PrevArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <PrevArrow fill="#0044CC" />
                    </>)
                }
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
                {(currentPage === 500) ?
                    (<>
                        <NextArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <NextArrow fill="#0044CC" />
                    </>)
                }
            </PaginationRightButton>
            <PaginationRightButtonNextPage
                disabled={currentPage === 500}
                onClick={() => dispatch(setCurrentPage(lastPage - currentPage))}>
                <PaginationButtonText>
                    Last
                </PaginationButtonText>
                {(currentPage === 500) ?
                    (<>
                        <NextArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <NextArrow fill="#0044CC" />
                    </>)
                }
            </PaginationRightButtonNextPage>
            <PaginationRightButtonMax
                disabled={currentPage === 500}
                onClick={() => dispatch(setCurrentPage(lastPage - currentPage))}>
                {(currentPage === 500) ?
                    (<>
                        <NextArrow fill="#7E839A" />
                        <NextArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <NextArrow fill="#0044CC" />
                        <NextArrow fill="#0044CC" />
                    </>)
                }
            </PaginationRightButtonMax>
        </PaginationBox>
    );
};
export default Pagination;