import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  padding-bottom: 26px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;
  margin-left: 0;
  margin-bottom: 0;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));

  @media (max-width: 767px) {
    border-radius: 5px;
    margin: 0;
    padding: 8px;
    padding-bottom: 20px;
    gap: 8px;
  }
`;

export const NameBox = styled.div`
  /* width: 176px;
  height: 64px; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; */
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const Name = styled.h3`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin: 0;
  color: ${({ theme }) => theme.color.woodSmoke};
  font-weight: 500;
  font-size: 22px;

  @media (max-width: 767px) {
    font-size: 14px;
    
  }

  &:hover {
    color: ${({ theme }) => theme.color.aquamarineBlue};
  }
`;

export const Poster = styled.div`
  /* width: 177px;
  height: 231px; */
  /* top: -6px; */
`;

export const Photo = styled.img`
  border-radius: 5px;
  width: 177px;
  height: 231px;

  @media (max-width: 767px) {
    width: 128px;
    height: 178px;
  }
`;
