import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    ${({icon}) => icon && css`
        margin-top: 180px;    
    `}  
`;

export const Error = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-top: 38px;
    text-align: center;
    color: ${({theme}) => theme.color.woodSmoke};
`;

export const Info = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    text-align: center;
    color: ${({theme}) => theme.color.woodSmoke};
    margin-top: 24px;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 24px;
    width: 181px;
    height: 51px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.scienceBlue};
    border-radius: 5px;
    border-color: ${({theme}) => theme.color.scienceBlue};;
    margin-top: 24px;
    padding: 16px 20px;
`;