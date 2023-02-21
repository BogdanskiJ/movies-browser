import styled from "styled-components";

export const MovieListPage = styled.div`
  background-color: ${({ theme }) => theme.color.whisper};
  max-width: 1368px;
  margin: 0 auto;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    padding-bottom: 30px;
    padding: 16px;
  };
  @media (max-width: 480px) {
    margin-bottom: 10px;
  };
`;

export const PopularMoviesName = styled.h1`
  margin-top: 56px;
  align-self: flex-start;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.woodSmoke};
  margin-left: 1.5%;

  @media (max-width: 756px) {
    margin-left: 0;
    margin-top: 8px;
    align-self: flex-start;
    font-size: 18px;
  };
`;

export const MoviesList = styled.div`
  margin: 24px auto 0;
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-left: 1.5%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  };
  
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  };

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 12px auto 0;
    gap: 8px;
  };
`;