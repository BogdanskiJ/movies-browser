import styled from "styled-components";

export const MovieDetailsPage = styled.div`
    max-width:1920px;
    margin:auto;
    display:flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    padding-bottom:200px;
    background-color: ${({ theme }) => theme.color.whisper};
    @media (max-width: 756px) {
        width:100%;
        gap: 16px;
    }
`;

export const CastBox = styled.div`
    max-width:1368px;
    width:100%;
    margin:0 16px;
    display: flex;
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media (max-width: 500px) {
        gap: 12px;
    }
`;

export const Title = styled.div`
    width:100%;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.black};
    @media (max-width: 500px) {
        font-weight: 600;
        font-size: 20px;
        line-height: 120%;
    }
`;

export const TileBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap:24px;
    @media (max-width: 500px) {
        gap: 16px;
    }
`;

export const MovieDetailsPeople = styled.div`
display: flex;
gap:24px;
`;