import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const PaginationBox = styled.div`
    margin-top:40px;
    justify-content:center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;

    @media (max-width: 756px) {
        gap: 8px;
    };
`;

export const PaginationLeftButton = styled(NavLink)`
    text-decoration:none;
    align-items: center;
    display:flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    border-radius: 5px;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;

    &:hover{
        background: ${({ theme }) => theme.color.melrose};
        transition: 0.5s;
    }

    @media (max-width: 756px) {
        padding: 7.5px 12px;
    };
    
    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            pointer-events: none;
            cursor: default;
        }
    `} 
`;

export const PaginationLeftButtonPreviousPage = styled(NavLink)`
    text-decoration:none;
    align-items: center;
    display:flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    border-radius: 5px;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;

    &:hover{
        background: ${({ theme }) => theme.color.melrose};
        transition: 0.5s;
    }

    @media (max-width: 756px) {
        display:none
    };

    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            pointer-events: none;
            cursor: default;
        }
    `} 
`;

export const PaginationLeftButtonMin = styled(NavLink)`
    text-decoration:none;
    align-items: center;
    display:flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    border-radius: 5px;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;

    &:hover{
        background: ${({ theme }) => theme.color.melrose};
        transition: 0.5s;
    }

    @media (min-width: 756px) {
        display:none
    };

    @media (max-width: 756px) {
        padding: 7.5px 12px;
    };

    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            pointer-events: none;
            cursor: default;
        }
    `} 
`;

export const PaginationRightButton = styled(NavLink)`
    text-decoration:none;
    align-items: center;
    display: flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    line-height: 140%;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;

    &:hover{
        background: ${({ theme }) => theme.color.melrose};
        transition: 0.5s;
    }

    @media (max-width: 756px) {
        padding: 7.5px 12px;
    }; 

    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            pointer-events: none;
            cursor: default;
        }
    `} 
`;


export const PaginationButtonText = styled.div`

    @media (max-width: 756px) {
        display:none
    }; 
`;

export const PaginationRightButtonMax = styled(NavLink)`
    text-decoration:none;
    align-items: center;
    display: flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    line-height: 140%;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;

    &:hover{
        background: ${({ theme }) => theme.color.melrose};
        transition: 0.5s;
    }

    @media (min-width: 756px) {
        display:none
    }; 

    @media (max-width: 756px) {
        padding: 7.5px 12px;
    }; 

    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            pointer-events: none;
            cursor: default;
        }
    `} 
`;

export const PaginationRightButtonNextPage = styled(NavLink)`
    text-decoration:none;
    align-items: center;
    display: flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    line-height: 140%;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;
    
    &:hover{
        background: ${({ theme }) => theme.color.melrose};
        transition: 0.5s;
    }

    @media (max-width: 756px) {
        display:none
    }; 

    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            pointer-events: none;
            cursor: default;
        }
    `} 
`;