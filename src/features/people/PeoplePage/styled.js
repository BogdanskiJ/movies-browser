import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whisper};
`;

export const MainWrapper = styled.div`
  max-width: 1368px;
  padding-top: 56px;
  padding-bottom: 60px;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
   padding: 0 16px 16px 16px;
    padding-top: 24px;
    max-width: 330px;
    margin: auto;
    align-self: center;
    justify-content: center;
    align-content: center;
  }
`;

export const Info = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  margin-bottom: 24px;
  font-style: normal;
  align-self: flex-start;

  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 12px;
    gap:16px;
  }
`;

export const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  align-self: center;

  @media (max-width: 767px) {
    align-self: center;
    min-width: 288px;
  }
`;

export const PopularActorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: stretch;
  gap: 24px;

  @media (max-width: 767px) {
    /* gap: 16px; */
  }
`;
