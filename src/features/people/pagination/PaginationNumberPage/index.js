import React from "react";
import { useSelector } from "react-redux";
import { theme } from "../../../../theme";
import { selectPeopleListState } from "../../PeoplePage/peopleListSlice";
import { PageNumberBox, Number } from "./styled";

const PaginationPeoplePageNumber = () => {
  const { peoplePage, totalPages, lastPage } = useSelector(selectPeopleListState);
  return (
    <PageNumberBox theme={theme}>
      Page
      <Number>{peoplePage ? peoplePage : 0}</Number>
      of
      <Number>{totalPages < lastPage ? totalPages : lastPage}</Number>
    </PageNumberBox>
  );
};
export default PaginationPeoplePageNumber;
