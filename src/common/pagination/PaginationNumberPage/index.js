import React, { useState } from "react";
import { theme } from "../../../theme";
import { PageNumberBox, Number } from "./styled";


export const PaginationPageNumber = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return(
    <>
        <PageNumberBox theme={theme}>
            Page
            <Number>{currentPage}</Number>
            of
            <Number>500</Number>
        </PageNumberBox>
    </>
    )
};
