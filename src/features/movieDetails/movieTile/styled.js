import styled from "styled-components";

export const Tail = styled.div`
max-width:1368px;
margin:auto;
margin-top:64px;
box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 40px;
gap: 40px;
background-color: ${({ theme }) => theme.color.white};
`;

export const Poster = styled.img`
    border-radius: 5px;
    max-width: 312px;
`;

export const MovieDescription = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 8px;
    align-items: flex-start;
    gap:24px;
`;

export const MovieTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin:0;
    color: ${({ theme }) => theme.color.black};
`;

export const MovieYear = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.black};
`;

export const MovieProduction = styled.div`
    display:flex;
    flex-direction:column;
    gap:8px;
    color: ${({ theme }) => theme.color.stormGrey};
`;

export const CountryAndDate = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap:10px;
`;

export const ProductionInfo = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.black};
`;

export const MovieTags = styled.div`
    display:flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    gap:16px;
`;

export const Tag = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    padding: 8px 16px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.woodsmoke};
    background: ${({ theme }) => theme.color.mystic};
`;

export const MovieRating = styled.div`
    display: flex;
    align-items: baseline;
    flex-wrap: nowrap;
    gap:8px;
    color: ${({ theme }) => theme.color.black};
    @media (max-width: 756px) {
        padding: 0;
        
    }
`;

export const Rating = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    /* @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    } */
`;

export const MaxRating = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    /* @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    } */
`;

export const VotesNumber = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;

    /* @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    } */
`;

export const MovieStory = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;

    /* @media (max-width: 756px) {
        padding: 0;
        font-size: 13px;
        line-height: 130%;
    } */
`;