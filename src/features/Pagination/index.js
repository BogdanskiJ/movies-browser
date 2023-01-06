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

export const Pagination = () => {
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
            Page <Number>1</Number> of <Number>500</Number>
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
