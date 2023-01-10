import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledNavigation = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 94px;
    width: auto;
    background-color: ${({theme}) => theme.color.woodSmoke};
    margin: 0px;
    list-style-type: none;
    color: ${({theme}) => theme.color.white};
`;

export const Icon = styled.img`
    margin-left: 298px;

    @media (max-width:767px){
        width: 13px;
        height: 10px;
        margin-left: auto;
    };
`;

export const Name = styled.li`
    display: flex;
    flex-wrap: nowrap;
    padding-left: 16px;
    padding-right: 92px;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;

    @media (max-width:767px){
        font-size: 13px;
        line-height: 130%;
        letter-spacing: -0.5px;
        padding: 10px;
    };
`;

export const Subpages = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-top: 4px;
    padding: 12px;
`;

export const StyledNavLink = styled(NavLink)`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: ${({theme}) => theme.color.white};
    text-decoration: none;
    padding: 8px 24px;

    &.active{
        border: 1px solid #FFFFFF;
        border-radius: 24px;
    };

    @media (max-width:767px){
        font-size: 12px;
        line-height: 18px;
        margin: auto;
    };
`;

export const Input = styled.input`
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    width: 432px;
    height: 48px;
    padding: 12px 14px 12px 40px;

    @media (max-width:767px){
        width: 288px;
        height: 44px;
        margin: auto;
        margin-bottom: 16px;
    };
`;

export const IconSearch = styled.img`
    position: absolute;
    top: 34px;
    left: 1269px;

    @media (max-width:767px){
        width: 12px;
        height: 13px;
        top: 98px;
        left: 56px;
    };
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 220px 1fr;
    grid-column-gap: 388px;
`;