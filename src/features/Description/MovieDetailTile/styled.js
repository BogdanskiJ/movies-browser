import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const MovieDetail = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 5px;
  padding: 16px;
  background: ${({ theme }) => theme.color.white};

  @media (max-width: 756px) {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    gap: 12px;
    padding: 8px;
  } ;
`;

export const PosterBox = styled(NavLink)``;

export const Poster = styled.div`
`;
export const PosterImg= styled.img`
object-fit: cover;
border-radius: 5px;
width: 100%;
aspect-ratio: 2/3;
max-height: auto;
margin-bottom: 16px;
background: ${({ theme }) => theme.color.silver};
@media (max-width: 480px) {
  height: 130px;
  width: auto;
}
@media (min-width: 481px) and (max-width:756px){
  width: 100%;
  min-height: 210px;
  aspect-ratio: 3/3;
}

`

export const MovieDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 756px) {
    justify-content: flex-start;
  } ;
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
  }
  @media (max-width: 756px) {
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  } ;
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
  } ;
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
  } ;
`;

export const Tag = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  padding: 8px 16px;
  margin: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.woodsmoke};
  background: ${({ theme }) => theme.color.mystic};

  @media (max-width: 756px) {
    font-weight: 400;
    font-size: 10px;
    line-height: 110%;
    padding: 4px 8px;
  } ;
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

  @media (max-width: 756px) {
    padding: 0;
    height: auto;
    margin-top: 8px;
    gap: 8px;
  } ;
`;

export const Rating = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: 756px) {
    padding: 0;
    font-size: 13px;
    line-height: 130%;
  } ;
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
  } ;
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;
`