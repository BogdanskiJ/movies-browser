import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Tile = styled.div`
 background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0px;
  margin-bottom: 0;
  width: 208px;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));

  @media (max-width: 767px) {
    width: 47%;
    border-radius: 5px;
    padding: 8px;
    padding-bottom: 20px;
    gap: 8px;
  }
`;
export const PhotoBox = styled(NavLink)``;
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
  max-width: 176px;

  @media (max-width: 767px) {
    font-size: 14px;
    word-break: keep-all;
  }

  &:hover {
    color: ${({ theme }) => theme.color.aquamarineBlue};
  }
`;

export const Photo = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.silver};

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
  }
`;
