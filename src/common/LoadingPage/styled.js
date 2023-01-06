import styled from "styled-components";

export const StyledHeader = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.woodSmoke};
    margin-top: 56px;
    margin-left: 276px;

    @media (max-width:767px){
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        margin-left: 16px;
    };
`;