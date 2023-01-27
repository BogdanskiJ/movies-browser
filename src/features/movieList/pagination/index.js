import React from "react";
import { theme } from "../../../theme";
import { PaginationBox, PaginationButtonText, PaginationLeftButton, PaginationLeftButtonMin, PaginationLeftButtonPreviousPage, PaginationRightButton, PaginationRightButtonMax, PaginationRightButtonNextPage } from "./styled";
import { ReactComponent as NextArrow } from '../../../images/nextArrow.svg';
import { ReactComponent as PrevArrow } from '../../../images/prevArrow.svg';
import PaginationPageNumber from "./PaginationNumberPage";
import { useSelector } from "react-redux";
import { selectMovieListState } from "../movieListSlice";
import { useParams } from "react-router-dom";

const Pagination = () => {
    const { page } = useParams();
    const { lastPage, firstPage } = useSelector(selectMovieListState);
    return (
        <PaginationBox theme={theme}>
            <PaginationLeftButtonMin
                disabled={(Number(page) === 1) || (page === undefined)}
                to={`/popular-movies/${firstPage}`}>
                {((Number(page) === 1) || (page === undefined)) ?
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
                disabled={(Number(page) === 1) || (page === undefined)}
                to={`/popular-movies/${firstPage}`}>
                {((Number(page) === 1) || (page === undefined)) ?
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
                disabled={(Number(page) === 1) || (page === undefined)}
                to={`/popular-movies/${Number(page) - 1}`}>
                {((Number(page) === 1) || (page === undefined)) ?
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
                disabled={(Number(page) === 500)}
                to={page !== undefined ? (`/popular-movies/${Number(page) + 1}`) : (`/popular-movies/${2}`)}>
                <PaginationButtonText>
                    Next
                </PaginationButtonText>
                {(Number(page) === 500) ?
                    (<>
                        <NextArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <NextArrow fill="#0044CC" />
                    </>)
                }
            </PaginationRightButton>
            <PaginationRightButtonNextPage
                disabled={(Number(page) === 500)}
                to={`/popular-movies/${lastPage}`}>
                <PaginationButtonText>
                    Last
                </PaginationButtonText>
                {(Number(page) === 500) ?
                    (<>
                        <NextArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <NextArrow fill="#0044CC" />
                    </>)
                }
            </PaginationRightButtonNextPage>
            <PaginationRightButtonMax
                disabled={(Number(page) === 500)}
                to={`/popular-movies/${lastPage}`}>
                {(Number(page) === 500) ?
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