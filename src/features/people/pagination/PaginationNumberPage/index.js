import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { theme } from "../../../../theme";
import { selectPeopleListState } from "../../PeoplePage/peopleListSlice";
import { PageNumberBox, Number } from "./styled";

const PaginationPeoplePageNumber = () => {
  const { lastPage } = useSelector(selectPeopleListState);
  const { page } = useParams();
  return (
    <PageNumberBox theme={theme}>
      Page
      <Number>{page !== undefined ? page : 1}</Number>
      of
      <Number>{lastPage}</Number>
    </PageNumberBox>
  );
};
export default PaginationPeoplePageNumber;
