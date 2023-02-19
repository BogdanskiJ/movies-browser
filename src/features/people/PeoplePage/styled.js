import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whisper};
  max-width: 1368px;
  margin: 0 auto;
  @media (max-width: 1380px) {
    padding: 0 16px 16px 16px;
  };
`;

export const MainWrapper = styled.div`
  margin: 0px 0px 56px 0px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(5, 1fr);
  };

  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  };

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  };

  @media (max-width: 480px) {
    margin: 0px 0px 21px 0px;
    grid-template-columns: 1fr 1fr;
  };
`;

export const Info = styled.h1`
  margin-top: 56px;
  align-self: flex-start;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: 767px) {
    margin-top: 24px;
    align-self: flex-start;
    font-size: 18px;
  };
`;

export const PopularActorsWrapper = styled.div``;
export const Margin = styled.div``;