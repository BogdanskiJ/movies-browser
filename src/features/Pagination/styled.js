import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0px;
  gap: 24px;
  width: 525px;
  height: 36px;
  margin: auto;
  margin-bottom: 100px;
`;

export const PrevButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  height: 36px;
  background: ${({ theme }) => theme.color.prevBttn};
  border-radius: 5px;
  border: none;
`;
export const NextButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  height: 36px;
  background: ${({ theme }) => theme.color.nextBttn};
  border: none;
  border-radius: 5px;
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.greyNumber};
  width: 120px;
`;
export const Number = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;

export const TextBox = styled.div`
  display: flex;
  width: 300px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
