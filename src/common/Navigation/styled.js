import { NavLink } from "react-router-dom";
import styled from "styled-components";
import iconSearch from './IconSearch/search.svg';

export const StyledNavigation = styled.ul`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    min-height: 94px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.black};
    margin: 0;
    list-style-type: none;
    color: ${({ theme }) => theme.color.white};
    padding: 0px;
`;

export const Container = styled.div`
    max-width:1368px;
    width:100%;
    display: flex;
    margin:auto;
    padding:0 1% 0 1%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
     @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:24px;
        padding-top:24px;
        padding-bottom:16px;
    };
`;

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap:80px;
    flex-wrap: no-wrap;
    @media (max-width:1000px){
        gap: 30px;
    };
    @media (max-width:768px){
        gap: 19px;
        width: 100%;
        display: flex;
        justify-content: center;
    };
`;

export const Logo = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    gap:12px;
    @media (max-width:768px){
        gap:8px;
        align-items:center;
    };
`;

export const Icon = styled.img`
@media (max-width:768px){
        max-width:17px;
        max-height:17px;
        align-items:center;
    };
`;

export const Name = styled.li`
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
    margin: 0;
    white-space: nowrap;
    @media (max-width:768px){
        font-size: 13px;
        line-height: 130%;
        letter-spacing: -0.5px;
    };
`;

export const Subpages = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap:16px;
    @media (max-width:768px){
        gap:12px;
        align-items:center;
    };
`;

export const StyledNavLink = styled(NavLink)`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    padding: 13px 24px;
    &.active{
        border: 1px solid #FFFFFF;
        border-radius: 24px;
    };
    @media (max-width:768px){
        font-size: 12px;
        line-height: 18px;
        padding: 8px 12px;
    };
`;

export const Search = styled.div`
    display:flex;
    flex-wrap:nowrap;
    min-width: 200px;
    background-color:none;
    @media (max-width:768px){
        width:80%;
    };
`;

export const Input = styled.input`
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    min-width: 200px;
    width: 432px;
    height: 48px;
    padding-left: 64px;
    background-image: url(${iconSearch});
    background-repeat:no-repeat;
    background-size: auto;
    background-position-y:center;
    background-position-x:27px;
    
    @media (max-width:1000px){
        width: 288px;
    };
    @media (max-width:768px){
        width:100%;
        height:44px;
        padding-left: 40px;
        background-position-x:17px;
        background-size: 17px;
        font-size:13px;
    };
`;
