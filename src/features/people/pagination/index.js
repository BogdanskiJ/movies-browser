import React from "react";
import { theme } from "../../../theme";
import {
  PaginationBox,
  PaginationButtonText,
  PaginationLeftButton,
  PaginationLeftButtonMin,
  PaginationLeftButtonPreviousPage,
  PaginationRightButton,
  PaginationRightButtonMax,
  PaginationRightButtonNextPage,
} from "./styled";
import { ReactComponent as NextArrow } from "../../../images/nextArrow.svg";
import { ReactComponent as PrevArrow } from "../../../images/prevArrow.svg";
import PaginationPeoplePageNumber from "./PaginationNumberPage";
import { useSelector } from "react-redux";
import { selectPeopleListState } from "../PeoplePage/peopleListSlice";
import { useLocation } from "react-router-dom";

const Pagination = () => {
  const { peoplePage, totalPages, lastPage, firstPage } = useSelector(selectPeopleListState);
  const location = useLocation();

  return (
    <PaginationBox theme={theme}>
      <PaginationLeftButtonMin
        disabled={Number(peoplePage) === 1 || peoplePage === undefined || (peoplePage === 0)}
        to={`${((location.search === "")) ?
          (`/popular-people/${firstPage}`) : (`/popular-people/${firstPage}${location.search}`)}`
        }>
        {Number(peoplePage) === 1 || peoplePage === undefined || (peoplePage === 0) ? (
          <>
            <PrevArrow fill="#7E839A" />
            <PrevArrow fill="#7E839A" />
          </>
        ) : (
          <>
            <PrevArrow fill="#0044CC" />
            <PrevArrow fill="#0044CC" />
          </>
        )}
      </PaginationLeftButtonMin>

      <PaginationLeftButtonPreviousPage
        disabled={Number(peoplePage) === 1 || peoplePage === undefined || (peoplePage === 0)}
        to={`${((location.search === "")) ?
          (`/popular-people/${firstPage}`) : (`/popular-people/${firstPage}${location.search}`)}`
        }>
        {Number(peoplePage) === 1 || peoplePage === undefined || (peoplePage === 0) ? (
          <>
            <PrevArrow fill="#7E839A" />
          </>
        ) : (
          <>
            <PrevArrow fill="#0044CC" />
          </>
        )}
        <PaginationButtonText>First</PaginationButtonText>
      </PaginationLeftButtonPreviousPage>
      <PaginationLeftButton
        disabled={Number(peoplePage) === 1 || peoplePage === undefined || (peoplePage === 0)}
        to={`${((location.search === "")) ?
          (`/popular-people/${Number(peoplePage) - 1}`) : (`/popular-people/${Number(peoplePage) - 1}${location.search}`)}`
        }>
        {Number(peoplePage) === 1 || peoplePage === undefined ? (
          <>
            <PrevArrow fill="#7E839A" />
          </>
        ) : (
          <>
            <PrevArrow fill="#0044CC" />
          </>
        )}
        <PaginationButtonText>Previous</PaginationButtonText>
      </PaginationLeftButton>
      <PaginationPeoplePageNumber />
      <PaginationRightButton
        disabled={Number(peoplePage) === 500 || (peoplePage === 0) || (peoplePage == totalPages)}
        to={peoplePage !== undefined
          ?
          (`${((location.search === "")) ?
            (`/popular-people/${Number(peoplePage) + 1}`)
            : (`/popular-people/${Number(peoplePage) + 1}${location.search}`)}`)
          :
          (`${((location.search === "")) ?
            (`/popular-people/${2}`) :
            (`/popular-people/${2}${location.search}`)}`)}
      >
        <PaginationButtonText>Next</PaginationButtonText>
        {Number(peoplePage) === 500 || (peoplePage === 0) || (peoplePage == totalPages) ? (
          <>
            <NextArrow fill="#7E839A" />
          </>
        ) : (
          <>
            <NextArrow fill="#0044CC" />
          </>
        )}
      </PaginationRightButton>
      <PaginationRightButtonNextPage
        disabled={Number(peoplePage) === 500 || (peoplePage === 0) || (peoplePage == totalPages)}
        to={`${((location.search === "")) ?
          (`/popular-people/${lastPage}`) : (`/popular-people/${totalPages < lastPage ? totalPages : lastPage}${location.search}`)}`
        }>
        <PaginationButtonText>Last</PaginationButtonText>
        {Number(peoplePage) === 500 || (peoplePage === 0) || (peoplePage == totalPages) ? (
          <>
            <NextArrow fill="#7E839A" />
          </>
        ) : (
          <>
            <NextArrow fill="#0044CC" />
          </>
        )}
      </PaginationRightButtonNextPage>
      <PaginationRightButtonMax
        disabled={Number(peoplePage) === 500 || (peoplePage === 0) || (peoplePage == totalPages)}
        to={`${((location.search === "")) ?
          (`/popular-people/${lastPage}`) : (`/popular-people/${totalPages < lastPage ? totalPages : lastPage}${location.search}`)}`
        }>
        {Number(peoplePage) === 500 || (peoplePage === 0) || (peoplePage == totalPages) ? (
          <>
            <NextArrow fill="#7E839A" />
            <NextArrow fill="#7E839A" />
          </>
        ) : (
          <>
            <NextArrow fill="#0044CC" />
            <NextArrow fill="#0044CC" />
          </>
        )}
      </PaginationRightButtonMax>
    </PaginationBox>
  );
};
export default Pagination;
