import React from "react";
import { theme } from "../../../theme";
import { PageNumberBox, Number } from "./styled"


export const PaginationPageNumber = () => (
    <>
        <PageNumberBox theme={theme}>
            Page
            <Number>1</Number>
            of
            <Number>500</Number>
        </PageNumberBox>


    </>



);
