import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whisper};
`;

export const MainWrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  padding-top: 56px;
  padding-bottom: 60px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.whisper};
  padding-bottom: 60px;

  @media (min-width: 260px) and (max-width: 500px) {
    padding: 20px;
    padding-top: 24px;
    margin: auto;
    max-width: 330px;
    justify-items: left;
  }

  @media (min-width: 501px) and (max-width: 767px) {
    padding-left: 15px;
    padding-top: 24px;
    padding-bottom: 30px;
  } ;

  @media (min-width: 767px) and (max-width: 1360px) {
    padding: 60px;
    padding-top: 24px;
  }
`;

export const Info = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  margin-bottom: 24px;
  font-style: normal;

  @media (max-width: 300px) {
    font-size: 24px;
    margin-left: 20px;
  }

  @media (min-width: 301px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const TileWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);

  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px;
    gap: 8px;
    justify-items: left;
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 16px;
    max-width: 330px;
    margin: 0;
  }
  @media (min-width: 921px) and (max-width: 1360px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 501px) and (max-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    margin: 0;
  }
`;
