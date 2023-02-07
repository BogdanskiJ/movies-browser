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
  margin-left: 0;
  margin-bottom: 0;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));

  @media (max-width: 300px) {
  }

  @media (min-width: 301px) and (max-width: 767px) {
    border-radius: 5px;
    margin: 0;
    padding: 8px;
    padding-bottom: 20px;
    gap: 8px;
    max-width: 136px;
  }
  @media (min-width: 767px) and (max-width: 1300px) {
    max-width: 230px;
  }
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

export const Photo = styled.img`
  border-radius: 5px;
  width: 176px;
  height: 231px;
  flex-grow: 0;
  background-color: ${({ theme }) => theme.color.silver};

  @media (max-width: 767px) {
    width: 120px;
    height: 178px;
  }
`;
