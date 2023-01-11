import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 1368px;
  margin: auto;
  display: grid;
  margin-top: 56px;
  align-items: center;

  @media (max-width: 767px) {
    max-width: 100%;
  };
`;

export const Info = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  font-style: normal;
`;

export const TileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  };
`;
