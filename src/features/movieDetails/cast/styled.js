import styled from "styled-components";

export const CastBox = styled.div`
max-width:1368px;
width:100%;
margin:auto;
display: flex;
flex-direction: column;
gap: 32px;

/* flex-direction: row;
align-items: flex-start;
padding: 40px;
 */
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.black};
`;

export const People = styled.div`

`;