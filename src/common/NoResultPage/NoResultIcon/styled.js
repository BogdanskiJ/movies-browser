import styled, { css } from "styled-components";

export const ItemCloud = styled.div`
    margin-top: 186px;
    margin-left: 826px;
`;

export const ItemSmallCloud = styled.div`
    margin-top: -36px;
    margin-left: 992px;
`;

export const Container = styled.div`
    display: grid;
    margin-left: 792px;
`;

export const Item = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;

    ${({special}) => special && css`
        grid-row-start: 2;
        margin-left: 74px;
        margin-top: -44px;
    `}

    ${({wavyLine}) => wavyLine && css`
        grid-row-start: 2;
        margin-left: 106px;
        margin-top: -26px;
    `}
`;