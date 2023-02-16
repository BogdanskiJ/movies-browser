import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 64px;
`;
export const TileWrapper = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin: 0 0 56px 0;
  
  padding-bottom: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;
export const MovieScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodSmoke};
  margin-bottom: 24px;
  margin-right: 10px;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
