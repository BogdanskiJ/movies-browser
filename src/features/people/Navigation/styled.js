import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Wrapper = styled.div`
background-color: ${({ theme }) => theme.color.black};
`
export const NavContainer = styled.div`
display: flex;
flex-direction: row;
width: 1368px;
margin: auto;
color: ${({ theme }) => theme.color.white};
align-items: center;
justify-content: space-between;
`

export const NavHeader = styled.h1`
color: ${({ theme }) => theme.color.white};
font-weight: 500;
font-size: 24px;
`

export const StyledNavigation = styled.ul`
display: flex;
flex-direction: row;
`

export const StyledNavItem = styled.li`
list-style-type: none;
margin-right: 64px; 
`

export const StyledNavLink = styled(NavLink)`
&.active {
    color: white;
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`

export const StyledInput = styled.input`
width: 432px;
height: 48px;
border: 1px solid ${({ theme }) => theme.color.borderColor};
border-radius: 33px;
margin: 23px 0px;
display: flex;
`