import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    ${({ icon }) => icon && css`
        margin-top: 180px;
        
        @media (max-width:767px){
            width: 50px;
            height: 45px;
            margin: auto;
        };
    `};
`;

export const Error = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-top: 38px;
    text-align: center;
    color: ${({ theme }) => theme.color.woodSmoke};

    @media (max-width:767px){
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        margin-left: 16px;
        margin-top: 48px;
    };
`;

export const Info = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    text-align: center;
    color: ${({ theme }) => theme.color.woodSmoke};
    margin-top: 24px;

    @media (max-width:767px){
        font-weight: 400;
        font-size: 10px;
        line-height: 140%;
        margin-left: 16px;
        margin-top: 12px;
    };
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 181px;
    height: 51px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.scienceBlue};
    border-radius: 5px;
    border-color: ${({ theme }) => theme.color.scienceBlue};;
    margin-top: 24px;
    padding: 16px 20px;

    @media (max-width:767px){
        font-weight: 500;
        font-size: 8px;
        line-height: 10px;
        width: 98px;
        height: 30px;
        padding: 9px;
        margin-top: 12px;
    };
`;