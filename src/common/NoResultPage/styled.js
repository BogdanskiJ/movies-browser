import styled from "styled-components";

export const StyledHeader = styled.header`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    color: ${({theme}) => theme.color.woodSmoke};
    margin-left: 276px;
    margin-top: 56px;

    @media (max-width:767px){
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        margin-left: 16px;
    };
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;

    @media (max-width:767px){
        margin-top: -100px;
    };
`;