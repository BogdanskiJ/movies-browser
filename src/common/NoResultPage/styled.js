import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({theme}) => theme.color.mercury};
`;

export const StyledHeader = styled.header`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    color: ${({ theme }) => theme.color.woodSmoke};
    margin-left: 10px;
    margin-top: 56px;
    margin-left: 276px;

    @media (max-width:1050px){
        font-size: 30px;
        margin-left: 40px;
    };

    @media (max-width:767px){
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        padding: 30px;
        margin-left: 10px;
        margin-top: auto;
    };

    @media (max-width: 320px){
        padding: 30px;
        margin: auto;
    };
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width:1057px){
        justify-content: flex-start;
    };

    @media (max-width:767px){
        width: 340px;
        margin-top: -100px;
        justify-content: flex-start;
    };
`;