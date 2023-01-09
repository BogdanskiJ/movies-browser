import styled from "styled-components";

export const Wrapper = styled.div`
width: 1368px;
`

export const Tile = styled.div`
padding: 40px;
display: grid;
grid-template-columns: 2 1fr 2fr;
grid-template-rows: 3 1fr;
justify-content: start;
margin-top: 56px;
background-color: ${({ theme}) => theme.color.white};
`
export const Photo = styled.div`
grid-column: 1/2;
width: 399px;
height: 564px;
border-radius: 5px;
border: solid 1px black;
`
export const Info = styled.div`
grid-column: 2/2;
display: flex;
flex-direction: column;
margin-left: 40px;
padding: 8px;
`

export const Name = styled.h2`
grid-row: 1;
font-weight: 600;
font-size: 36px;
margin: 0;
`

export const Script = styled.p`
font-weight: 400;
font-size: 20px;
color: #000000;
`