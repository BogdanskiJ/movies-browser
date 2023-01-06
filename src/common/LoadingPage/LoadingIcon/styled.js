import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left: 914px;
    margin-top: 120px;

    @media (max-width:767px){
        margin-top: 24px;
        margin-left: 143px;
    };
`;

export const Item = styled.div`
    margin-left: 70px;
    margin-top: -82px;

    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    transform-origin: -24px 35px;
    animation: rotate 2s linear infinite;
`;