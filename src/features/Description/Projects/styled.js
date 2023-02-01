import styled from "styled-components";


export const Wrapper = styled.div`
display:flex;
flex-direction: column;
margin-top: 64px; 
`
export const TileWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  margin-bottom: 24px;
  max-width: 100%;
  grid-auto-flow: column;
  grid-auto-columns: 25%;
  overflow-x: auto;
  padding-bottom: 10px;

`
export const MovieScroll = styled.div`
display: flex;
flex-wrap: nowrap;


`
export const Title = styled.span`
font-weight: 600;
font-size: 36px;
color: ${({ theme}) => theme.color.woodSmoke};
margin-bottom: 24px;
margin-right: 10px;
`
