import styled from "styled-components";


export const MovieDetail = styled.div`
    display:flex;
    flex-direction:column;
    max-width: 324px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    background: ${({ theme }) => theme.color.white};
    @media (max-width: 756px) {
        flex-direction:row;
        max-width: fit-content;
        padding:16px;
        gap:16px;
    }
`;

export const Poster = styled.img`
    border-radius: 5px;
    margin: 16px 16px auto 16px;
    @media (max-width: 756px) {
        width: 114px;
        height: 169px;
        margin:0;
    }

    
`;

export const MovieTitle = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin: 16px 16px auto 16px;
    color: ${({ theme }) => theme.color.woodsmoke};
    @media (max-width: 756px) {
        font-size: 16px;
        margin:0;
    }
`;

export const MovieYear = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin: 8px 16px auto 16px;
    color: ${({ theme }) => theme.color.waterloo};
    @media (max-width: 756px) {
        font-size: 13px;
        margin:0;
        margin-top:4px;
    }
`;

export const MovieTags = styled.p`
    display:flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    gap:8px;
    padding-left: 16px;
    @media (max-width: 756px) {
        font-size: 10px;
        margin:0;
        margin-top:8px;
        padding-left:0;
    }
`;

export const Tag = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    padding: 8px 16px;
    margin: 0;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.woodsmoke};
    background: ${({ theme }) => theme.color.mystic};
    @media (max-width: 756px) {
        font-size: 10px;
        padding:4px 8px;
    }
`;

export const MovieRating = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap:8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    padding: 8px 16px;
    margin: 0;
    border-radius: 5px;
    @media (max-width: 756px) {
        padding: 0;
        
    }
`;


export const Rating = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.color.woodsmoke};
    @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    }
`;

export const VotesNumber = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.color.waterloo};
    @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    }
`;