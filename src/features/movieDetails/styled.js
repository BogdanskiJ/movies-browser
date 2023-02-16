import styled from "styled-components";

export const MovieDetailsPage = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 46px;
  align-items: center;
  padding-bottom: 200px;
  background-color: ${({ theme }) => theme.color.whisper};

  @media (max-width: 756px) {
    width: 100%;
    gap: 16px;
  }
`;

export const CastBox = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 16px;
  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 500px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    margin: 0 16px;
  }
`;

export const TileBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;

  @media (max-width:1368px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width:990px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width:767px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
  }
  @media (max-width:480px) {
    margin: 0px 0px 21px 0px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MovieDetailsPeople = styled.div`
  display: flex;
  gap: 24px;
`;
