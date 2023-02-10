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

  @media (min-width: 1108px) and (max-width: 1300px){
    grid-auto-columns: 28%;
  }
  @media (min-width: 1024px) and (max-width: 1107px){
    grid-auto-columns: 35%;
  }
  @media (min-width: 768px) and (max-width: 830px){
    grid-auto-columns: 47%;
  }
  @media (min-width: 831px) and (max-width: 1023px){
    grid-auto-columns: 38%;
  }
  @media (max-width: 767px) {
    grid-auto-columns: 100% ;
    padding-bottom: 15px;
  }

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

@media (max-width: 767px) {
  font-size: 20px;
}

`
