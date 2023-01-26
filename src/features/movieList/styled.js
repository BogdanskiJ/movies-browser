import styled from "styled-components";

export const MovieListPage = styled.div`
    background-color: ${({ theme }) => theme.color.whisper};
    padding-top:60px;
    padding-bottom: 60px;

    @media (max-width: 756px) {
        padding-top:24px;
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
        padding: 16px;
    };
`;

export const PopularMoviesName = styled.h1`
    align-self:flex-start;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.woodSmoke};

    @media (max-width: 1353px) {
    };

    @media (max-width: 756px) {
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