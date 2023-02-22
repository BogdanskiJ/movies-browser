import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieDetail = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  gap: 16px;
  padding: 16px;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  align-items: start;

  @media (max-width: 480px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8px;
  };
`;

export const PosterBox = styled(NavLink)``;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
  background: ${({ theme }) => theme.color.silver};

  @media (max-width: 480px) {
    width: 136px;
  };

  @media (max-width: 756px) {
    display: grid;
    grid-template-columns: auto 1fr;
    aspect-ratio: 2/3;
    object-fit: contain;
  };
`;

export const MovieDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;

  @media (max-width: 756px) {
    gap: 8px;
  };
`;

export const MovieTitleBox = styled(NavLink)`
  text-decoration: none;
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0;
  color: ${({ theme }) => theme.color.woodSmoke};

  &:hover {
    color: ${({ theme }) => theme.color.aquamarineBlue};
  };

  @media (max-width: 756px) {
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  };
`;

export const MovieYear = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: 756px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;
    margin-top: 4px;
  };
`;

export const MovieTags = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  gap: 8px;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 756px) {
    font-size: 10px;
    margin: 0;
    margin-top: 8px;
  };
`;

export const Tag = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  padding: 8px 16px;
  margin: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.woodSmoke};
  background: ${({ theme }) => theme.color.mystic};

  @media (max-width: 756px) {
    font-weight: 400;
    font-size: 10px;
    line-height: 110%;
    padding: 4px 8px;
  };
`;

export const MovieRating = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  height: 100%;
  align-items: flex-end;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: 756px) {
    padding: 0;
    height: auto;
    margin-top: 8px;
    gap: 8px;
    flex-wrap: wrap;
  };
`;

export const Rating = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.woodSmoke};

  @media (max-width: 756px) {
    padding: 0;
    font-size: 13px;
    line-height: 130%;
  };
`;

export const VotesNumber = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: 756px) {
    padding: 0;
    font-size: 13px;
    line-height: 130%;
  };
`;
