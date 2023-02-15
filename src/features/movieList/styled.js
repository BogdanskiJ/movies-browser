import styled from "styled-components";

export const MovieListPage = styled.div`
    background-color: ${({ theme }) => theme.color.whisper};
    padding-bottom: 60px;

    @media (max-width: 756px) {
        padding-bottom: 30px;
    };
`;

export const PopularMoviesBox = styled.div`
    max-width: 1368px;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 756px) {
        align-self:center;
        padding: 0 16px 16px 16px;
    };
`;

export const PopularMoviesName = styled.h1`
    margin-top:56px;
    align-self:flex-start;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.woodSmoke};

    @media (max-width: 1398px) {
        margin-left:3%;
    };

    @media (max-width: 756px) {
        margin-left:0;
        margin-top:24px;
        align-self:flex-start;
        font-size: 18px;
    };
`;

export const MoviesList = styled.div`
    display: flex;
    gap: 24px;
    align-content: center;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;

    @media (max-width: 756px) {
        gap: 16px;
    };
`;

export const Margin = styled.div`
 
  @media (min-width: 756px) and (max-width: 1145px) {
    max-width: 700px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 0 auto;
  };

  @media (min-width: 1146px) and (max-width: 1398px) {
    max-width: 1084px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 0 auto;
  };

  @media (min-width: 1398px) and (max-width: 1800px) {
    max-width: 1370px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 0 auto;
  };
`;