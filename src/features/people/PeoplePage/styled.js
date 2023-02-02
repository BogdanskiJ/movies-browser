import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whisper};
`;

export const MainWrapper = styled.div`
  width: 1368px;
  margin: auto;
  /* display: grid; */

  padding-top: 56px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.whisper};

  @media (max-width: 767px) {
    width: 304px;
    padding-top: 24px;
    margin: auto;
    
  } ;
`;

export const Info = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  margin-bottom: 12px;
  font-style: normal;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const TileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 16px;
    width: 330px;
  } 
`;
