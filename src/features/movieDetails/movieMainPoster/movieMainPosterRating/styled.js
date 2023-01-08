import styled from "styled-components";

export const MovieDescription = styled.div`
    display: flex;
    padding-left: 15%;
    flex-direction: column;
    justify-content: flex-end;
    height: inherit;
`;

export const MovieDetail = styled.div`
    flex-direction:column;
    gap:20px;
    margin-bottom:56px;
        @media (max-width: 756px) {
        flex-direction:row;
        max-width: fit-content;
        padding:16px;
        gap:16px;
    }
`;

export const MovieTitle = styled.h2`
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    margin: 0 0 36px 0;
    color: ${({ theme }) => theme.color.white};
    @media (max-width: 756px) {
        font-size: 16px;
        margin:0;
    }
`;

export const MovieRating = styled.div`
    display: flex;
    align-items: center;
    gap:8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    margin: 0 0 16px 0;
    @media (max-width: 756px) {
        padding: 0;
        
    }
`;

export const Rating = styled.p`
    margin:0;
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.white};
    @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    }
`;

export const MaxRating = styled.p`
    margin:0;   
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    flex-wrap:nowrap;
    color: ${({ theme }) => theme.color.white};
    @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    }
`;

export const VotesNumber = styled.p`
    margin:0;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.white};
    @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    }
`;