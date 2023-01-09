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
  margin: 24px 0;
`;
export const NameBox = styled.div`
  width: 176px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Name = styled.h3`
  color: ${({ theme }) => theme.color.woodSmoke};
  font-weight: 500;
  font-size: 22px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin: 0;
`;

export const Poster = styled.div`
  width: 177px;
  height: 231px;
  top: -6px;
`;
export const Photo = styled.img`
  border-radius: 5px;
  width: 177px;
  height: 231px;
`;
