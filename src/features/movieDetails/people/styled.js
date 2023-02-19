import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  word-break: break-word;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

    @media (max-width: 767px) {
      padding: 8px;
    }
`;

export const NameBox = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
    top: -6px;
    text-decoration:none;

    @media (max-width: 500px) {
      display:flex;
    }
`;

export const Photo = styled.img`
  border-radius: 5px;
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  background: ${({ theme }) => theme.color.silver};
`;