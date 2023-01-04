import styled from "styled-components";

export const Tile = styled.div`
background-color: ${({ theme }) => theme.color.white};
padding: 16px;
gap: 12px;
width: 208px;
height: 339px;
display: flex;
flex-direction: column;
align-items: center;
`
export const Name = styled.h3`
color: ${({ theme }) => theme.color.text};
font-weight: 500;
font-size: 22px;
`

export const Photo = styled.img`
width: 177px;
height: 264px;
border: 1px solid black;
`