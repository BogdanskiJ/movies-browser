import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  @media (max-width: 767px) {
    flex-direction: c;
    flex-wrap: wrap;
  }
`;

export const PersonalInfo = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: #74788b;
  margin-bottom: 8px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const Result = styled.span`
  color: ${({ theme }) => theme.color.black};
`;
