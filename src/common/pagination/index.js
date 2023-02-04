import { useState, useEffect } from "react";

import Next from "./next";
import Previous from "./previous";
import {
  PrevButton,
  StyledSpan,
  Wrapper,
  Number,
  NextButton,
  TextBox,
} from "./styled";
import { useDispatch } from "react-redux";
import { fetchPeopleDetails } from "../../features/Description/peopleDetailsSlice";

export const Pagination = () => {
    const [currentPage ] = useState(1);
    const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <PrevButton>
          <Previous />
          First
        </PrevButton>
        <PrevButton>
          <Previous />
          Previous
        </PrevButton>
        <TextBox>
          <StyledSpan>
            Page <Number>{currentPage}</Number> of <Number>500</Number>
          </StyledSpan>
        </TextBox>
        <NextButton>
          Next
          <Next />
        </NextButton>
        <NextButton>
          Last
          <Next />
        </NextButton>
      </Wrapper>
    </>
  );
};

export default Pagination;
