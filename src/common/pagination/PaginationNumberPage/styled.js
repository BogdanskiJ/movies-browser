import styled from "styled-components";


export const PageNumberBox = styled.div`
    margin:24px;
    justify-content:center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    color: ${({ theme }) => theme.color.waterloo};
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    @media (max-width: 756px) {
        font-weight: 400;
        font-size: 10px;
        line-height: 24px;
        margin:0px;
    }
`;

export const Number = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.color.woodsmoke};
    @media (max-width: 756px) {
        font-weight: 600;
        font-size: 10px;
        line-height: 24px;
    }
`;


