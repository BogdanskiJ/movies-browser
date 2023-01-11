import React from "react";
import { theme } from "../../theme";
import { PaginationBox, PaginationLeftButton, PaginationRightButton } from "./styled";
import { ReactComponent as NextArrow } from '../../images/nextArrow.svg';
import { ReactComponent as PrevArrow } from '../../images/prevArrow.svg';
import { PaginationPageNumber } from "./PaginationNumberPage";


function Pagination() {
    const windowWidth = window.innerWidth;
    return (
        <PaginationBox theme={theme}>
            {(windowWidth > 753)
                ?
                <>
                    <PaginationLeftButton >
                        <PrevArrow />
                        First
                    </PaginationLeftButton>

                    <PaginationLeftButton>
                        <PrevArrow />
                        Previous
                    </PaginationLeftButton>

                    <PaginationPageNumber />

                    <PaginationRightButton>
                        Next
                        <NextArrow />
                    </PaginationRightButton>

                    <PaginationRightButton>
                        Last
                        <NextArrow />
                    </PaginationRightButton>
                </>
                :
                <>
                    <PaginationLeftButton >
                        <PrevArrow />
                        <PrevArrow />
                    </PaginationLeftButton>
                    <PaginationLeftButton>
                        <PrevArrow />
                    </PaginationLeftButton>
                    <PaginationPageNumber />
                    <PaginationRightButton>
                        <NextArrow />
                    </PaginationRightButton>
                    <PaginationRightButton>
                        <NextArrow />
                        <NextArrow />
                    </PaginationRightButton></>}
        </PaginationBox>
    );
};
export default Pagination;


