import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whisper};
`;

export const MainWrapper = styled.div`
  max-width: 1368px;
  padding-top: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-grow: 1 ;

  @media (max-width: 767px) {
    align-self: center;
    padding: 16px;
    padding-top: 0;
  }
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
  }
`;

export const PopularActorsWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-content: center;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    gap: 14px;
    align-self: center;
  }
`;

