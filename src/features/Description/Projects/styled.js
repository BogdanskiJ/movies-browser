import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction: column;
margin-top: 64px; 
`
export const TileWrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const Title = styled.span`
font-weight: 600;
font-size: 36px;
color: ${({ theme}) => theme.color.woodSmoke};
margin-bottom: 24px;
`