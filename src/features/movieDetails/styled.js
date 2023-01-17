import styled from "styled-components";

export const MovieDetailsPage = styled.div`
    max-width:1920px;
    margin:auto;
    margin-top: 93px;
    display:flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    background-color: ${({ theme }) => theme.color.whisper};
    @media (max-width: 756px) {
        width:100%;
        gap: 16px;
    }
`;