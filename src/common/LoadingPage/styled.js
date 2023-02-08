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
        margin-top: 24px;
        margin-left: 16px;
    };
`;

export const Container = styled.div`
    margin-top: 120px;
    display: flex;
    justify-content: center;

    @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
    };

    animation: rotate 2s linear infinite;

    @media (max-width:767px){
        margin-top: 24px;
    };    
`;

export const LoadingIcon = styled.img`
    @media (max-width:767px){
        width: 35px;
        height: 35px;
    };
`;



