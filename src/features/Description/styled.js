import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whisper};
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  padding: 16px;
  padding-top: 56px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 16px;
    padding-top: 24px;
  }
`;

export const Tile = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: 2 1fr 2fr;
  grid-template-rows: 2 1fr;
  justify-content: start;
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const Photo = styled.img`
  grid-row: 1 / span 2;
  grid-column: 1/2;
  width: 399px;
  height: 564px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};

  @media (max-width: 767px) {
    width: 116px;
    height: 163px;
  }
`;

export const Info = styled.div`
  grid-column: 2/2;
  grid-row: 1/2;
  margin-left: 40px;
  padding: 8px;
  @media (max-width: 767px) {
    margin-left: 10px;
    padding: 6px;
    grid-column: 1 / span 2;
    grid-row: 1/2;
    padding-left: 128px;
    margin: 0;
  }
`;

export const Name = styled.h2`
  grid-row: 1;
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  color: ${({ theme }) => theme.color.black};
  @media (max-width: 767px) {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Script = styled.div`
  font-weight: 400;
  font-size: 20px;
  grid-column: 2/2;
  grid-row: 1 / span 2;
  margin-left: 40px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.black};
  @media (max-width: 767px) {
    grid-column: 1 / span 2;
    padding-top: 72px;
    margin: 0;
    margin-top: 100px;
    font-size: 14px;
    flex-wrap: wrap;
  }
`;

export const ReadMoreButton = styled.button`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.mystic};
  border: none;
  padding: 5px;
  width: 140px;
  margin-top: 10px;
  align-self: flex-end;
  border-radius: 5%;
  @media (max-width: 767px) {
    padding: 8px;
    font-size: 12px;
    width: auto;
  }
`;
