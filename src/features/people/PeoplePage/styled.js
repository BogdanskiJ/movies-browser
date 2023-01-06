import styled from "styled-components";

export const MainWrapper = styled.div`
width: 1368px;
margin: auto;
display: grid;
margin-top: 56px;
align-items: center;
`
export const Info = styled.h2`
font-weight: 600;
font-size: 36px;
margin: 0;
font-style: normal;
`

export const TileWrapper = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(4,1fr);
`