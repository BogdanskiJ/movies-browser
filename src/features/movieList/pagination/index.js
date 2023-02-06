import React, { useEffect } from "react";
import { theme } from "../../../theme";
import { PaginationBox, PaginationButtonText, PaginationLeftButton, PaginationLeftButtonMin, PaginationLeftButtonPreviousPage, PaginationRightButton, PaginationRightButtonMax, PaginationRightButtonNextPage } from "./styled";
import { ReactComponent as NextArrow } from '../../../images/nextArrow.svg';
import { ReactComponent as PrevArrow } from '../../../images/prevArrow.svg';
import PaginationPageNumber from "./PaginationNumberPage";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieListState, selectMovieQuery, selectPage, setPage } from "../movieListSlice";
import { useLocation, useParams } from "react-router-dom";
import { select } from "redux-saga/effects";

const Pagination = () => {
    const dispatch = useDispatch();
    //const page = useSelector(selectPage);
    const { query, page, lastPage, firstPage, totalPages } = useSelector(selectMovieListState);
    const location = useLocation();
    console.log("page z location", location.pathname.slice(16));
    console.log("page", page);
    console.log("query", query);
    // useEffect(() => {
    //     location.pathname.slice(16) == page ?
    //         console.log("Równa się ") :
    //         dispatch(setPage(firstPage));
    // }, [page, dispatch]);

    return (
        <PaginationBox theme={theme}>
            <PaginationLeftButtonMin
                disabled={(Number(page) === 1) || (page === undefined) || (page === 0)}
                to={`${((location.search === "")) ?
                    (`/popular-movies/${firstPage}`) : (`/popular-movies/${firstPage}${location.search}`)}`
                }>
                {((Number(page) === 1) || (page === undefined) || (page === 0)) ?
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
                disabled={(Number(page) === 1) || (page === undefined) || (page === 0)}
                to={`${((location.search === "")) ?
                    (`/popular-movies/${firstPage}`) : (`/popular-movies/${firstPage}${location.search}`)}`
                }>
                {((Number(page) === 1) || (page === undefined) || (page === 0)) ?
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
                disabled={(Number(page) === 1) || (page === undefined) || (page === 0)}
                to={`${((location.search === "")) ?
                    (`/popular-movies/${Number(page) - 1}`) : (`/popular-movies/${Number(page) - 1}${location.search}`)}`
                }>
                {((Number(page) === 1) || (page === undefined) || (page === 0)) ?
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
                disabled={(Number(page) === 500) || (page === 0) || (page == totalPages)}
                to={page !== undefined
                    ?
                    (`${((location.search === "")) ?
                        (`/popular-movies/${Number(page) + 1}`)
                        : (`/popular-movies/${Number(page) + 1}${location.search}`)}`)
                    :
                    (`${((location.search === "")) ?
                        (`/popular-movies/${2}`) :
                        (`/popular-movies/${2}${location.search}`)}`)}
            >
                <PaginationButtonText>
                    Next
                </PaginationButtonText>
                {(Number(page) === 500 || (page === 0) || (page == totalPages)) ?
                    (<>
                        <NextArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <NextArrow fill="#0044CC" />
                    </>)
                }
            </PaginationRightButton>
            <PaginationRightButtonNextPage
                disabled={(Number(page) === 500) || (page === 0) || (page == totalPages)}
                to={`${((location.search === "")) ?
                    (`/popular-movies/${lastPage}`) : (`/popular-movies/${lastPage}${location.search}`)}`
                }>
                <PaginationButtonText>
                    Last
                </PaginationButtonText>
                {(Number(page) === 500 || (page === 0) || (page == totalPages)) ?
                    (<>
                        <NextArrow fill="#7E839A" />
                    </>) :
                    (<>
                        <NextArrow fill="#0044CC" />
                    </>)
                }
            </PaginationRightButtonNextPage>
            <PaginationRightButtonMax
                disabled={(Number(page) === 500) || (page === 0) || (page == totalPages)}
                to={`${((location.search === "")) ?
                    (`/popular-movies/${lastPage}`) : (`/popular-movies/${lastPage}${location.search}`)}`
                }>
                {(Number(page) === 500 || (page === 0) || (page == totalPages)) ?
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