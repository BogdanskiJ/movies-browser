import styled from "styled-components";

export const StyledHeader = styled.header`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    color: ${({theme}) => theme.color.woodSmoke};
    margin-left: 276px;
    margin-top: 56px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;