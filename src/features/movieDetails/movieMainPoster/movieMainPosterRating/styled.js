import styled from "styled-components";

export const MovieDescription = styled.div`
    display: flex;
    padding-left: 15%;
    padding-right: 15%;
    flex-direction: column;
    justify-content: flex-end;
    height: inherit;

    @media (max-width: 756px) {
        padding:0;
    };
`;

export const MovieDetail = styled.div`
    margin-bottom:56px;
    display:flex;
    flex-direction: column;
    gap:24px;
    align-items: flex-start;

    @media (max-width: 756px) {
        flex-direction:column;
        max-width: fit-content;
        padding:0 16px 10px;
        gap:8px;
        margin-bottom:0;
        display: flex;
        justify-content: flex-end;
    };
`;

export const MovieTitle = styled.h2`
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    margin: 0;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: 756px) {
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
    };
`;

export const MovieRating = styled.div`
    display: flex;
    align-items: center;
    gap:8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    align-items: baseline;
    flex-direction: row;
    justify-content: flex-start;

    @media (max-width: 756px) {
        padding: 0;
    };
`;

export const Rating = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: 756px) {
        font-weight: 600;
        font-size: 14px;
    };
`;

export const MaxRating = styled.div`  
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    flex-wrap:nowrap;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: 756px) {
        font-size: 10px;
    };
`;

export const VotesNumber = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.white};
    
    @media (max-width: 756px) {
        font-size: 10px;
    };
`;