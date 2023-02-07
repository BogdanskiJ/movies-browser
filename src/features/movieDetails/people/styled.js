import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  gap: 12px;
  max-width: 208px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  margin-bottom: 0;

    @media (max-width: 500px) {
      padding: 8px;
      gap: 8px;
      max-width:136px;
    }
`;

export const NameBox = styled.div`
  max-width: 176px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 500px) {
      max-width: 114px;
    }
`;

export const Name = styled(NavLink)`
  text-decoration:none;
  color: ${({ theme }) => theme.color.woodSmoke};
  font-weight: 500;
  font-size: 22px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  @media (max-width: 500px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    } 
`;

export const MovieName = styled.h3`
    color: ${({ theme }) => theme.color.waterloo};
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    margin: 0;

    @media (max-width: 500px) {
      font-weight: 400;
      font-size: 13px;
      line-height: 130%;
    }
`;

export const Poster = styled(NavLink)`
    width: 177px;
    height: 231px;
    top: -6px;
    text-decoration:none;

    @media (max-width: 500px) {
      width: 114px;
      height: 169px;
      display:flex;
    }
`;

export const Photo = styled.img`
  border-radius: 5px;
  width: 177px;
  height: 231px;
  background: ${({ theme }) => theme.color.silver};
  
  @media (max-width: 500px) {
    width: 114px;
    height: 169px;
    }
`;