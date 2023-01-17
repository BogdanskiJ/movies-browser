import styled from "styled-components";

export const Tail = styled.div`
    max-width:1368px;
    margin:auto;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: minmax(100px,auto) 1fr;
    grid-template-rows: minmax(100px,auto);
    grid-auto-rows: minmax(100px,auto) 1fr;
    padding: 40px;
    column-gap: 40px;
    row-gap: 24px;
    background-color: ${({ theme }) => theme.color.white};
    @media (max-width: 756px) {
        grid-auto-rows: auto;
        padding: 16px;
        margin: 0 16px;
        column-gap: 16px;
        row-gap: 16px;
    }
`;

export const PosterBox = styled.div`
    margin: 0;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;
    grid-auto-columns: minmax(100px,auto);
    @media (max-width: 500px) {
        grid-row-start: 1;
        grid-row-end: 2;
    }
`;

export const Poster = styled.img`
    border-radius: 5px;
    max-width: 312px;
    @media (max-width: 756px) {
        max-width: 269px;
        max-height: 400px;
    } 
    @media (max-width: 500px) {
        width: 114px;
        height: 169px;
    }
`;

export const MovieDescription = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 8px;
    align-items: flex-start;
    gap:24px;
    height: fit-content;
    @media (max-width: 756px) {
        margin-top: 0px;
        gap: 8px;
    }
`;

export const MovieTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin:0;
    color: ${({ theme }) => theme.color.black};
    @media (max-width: 756px) {
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
    }
`;

export const MovieYear = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.black};
    @media (max-width: 756px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 130%;
        color: ${({ theme }) => theme.color.waterloo};
        margin-top:-4px;
    }
`;

export const MovieProduction = styled.div`
    display:flex;
    flex-direction:column;
    gap:8px;
    color: ${({ theme }) => theme.color.stormGrey};
    @media (max-width: 756px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        color: ${({ theme }) => theme.color.waterloo};
    }
`;

export const Production = styled.div`
    @media (max-width: 756px) {
        display:none;
    }
`;

export const ReleaseData = styled.div`
    @media (max-width: 756px) {
        display:none;
    }
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
    @media (max-width: 756px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
    }
`;

export const ProductionInfo = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.black};
    @media (max-width: 756px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
    }
`;

export const MovieTags = styled.div`
    display:flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    gap:16px;
    @media (max-width: 756px) {
        gap:8px;
    }
`;

export const Tag = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    padding: 8px 16px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.woodsmoke};
    background: ${({ theme }) => theme.color.mystic};
    @media (max-width: 756px) {
        font-weight: 400;
        font-size: 10px;
        line-height: 110%;
        padding: 4px 8px;
    }
`;

export const MovieRating = styled.div`
    display: flex;
    align-items: baseline;
    flex-wrap: nowrap;
    gap:8px;
    color: ${({ theme }) => theme.color.black};
    @media (max-width: 756px) {
        padding: 0;
        max-height:16px;
    }
`;

export const StarBox = styled.div`
    display: flex;
    align-self: center;
    height: 25px;
    width: 25px;
    justify-content: center;
    align-items: center;
    @media (max-width: 756px) {
        transform: scale(0.7)
    }
`;

export const Rating = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
     @media (max-width: 756px) {
        font-weight: 600;
        font-size: 13px;
        line-height: 130%;
    } 
`;

export const MaxRating = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
     @media (max-width: 756px) {
        display:none;
    } 
`;

export const VotesNumber = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    @media (max-width: 756px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 130%;
        color: ${({ theme }) => theme.color.waterloo};
    } 
`;

export const MovieStory = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    @media (max-width: 756px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: ${({ theme }) => theme.color.black};
    }
    @media (max-width: 500px) {
        grid-column-start: 1;
        grid-column-end: 3;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: ${({ theme }) => theme.color.black};
    }
`;

export const MovieMainInfo = styled.div`
    display: flex;
    gap: 24px;
    flex-direction: column;
    @media (max-width: 756px) {
        padding: 0;
    } 
`;