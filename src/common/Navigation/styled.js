import styled, { css } from "styled-components";

export const StyledNavigation = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: row;
    grid-template-columns: 1fr, 1fr, 1fr;
    height: 94px;
    background-color: ${({theme}) => theme.color.woodSmoke};
    margin: 0px;
    list-style-type: none;
    color: ${({theme}) => theme.color.white};
`;

export const Icon = styled.li`
    margin-left: 298px;
`;

export const Name = styled.li`
    display: flex;
    flex-wrap: nowrap;
    padding: 16px;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
`;

export const Item = styled.li`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    padding: 32px;
    margin-top: 4px;

    ${({people}) => people && css`
        margin-right: 380px;
    `}

    ${({movies}) => movies && css`
        margin-left: 56px;
    `}
`;

export const Input = styled.input`
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    max-width: 432px;
    height: 48px;
`;