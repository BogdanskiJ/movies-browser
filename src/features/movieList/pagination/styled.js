import styled, { css } from "styled-components";

export const PaginationBox = styled.div`
    margin-top:40px;
    justify-content:center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;

    @media (max-width: 756px) {
        gap: 8px;
    };
`;

export const PaginationLeftButton = styled.button`
    align-items: center;
    display:flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    border-radius: 5px;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;
    @media (max-width: 756px) {
        padding: 7.5px 12px;
    };
    
    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
        }
    `} 
`;

export const PaginationLeftButtonPreviousPage = styled.button`
    align-items: center;
    display:flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    border-radius: 5px;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;
    @media (max-width: 756px) {
        display:none
    };

    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            color: -internal-light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
        }
    `} 
`;

export const PaginationLeftButtonMin = styled.button`
    align-items: center;
    display:flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    border-radius: 5px;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;
    @media (min-width: 756px) {
        display:none
    };
    @media (max-width: 756px) {
        padding: 7.5px 12px;
    };
    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            color: -internal-light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
        }
    `} 
`;

export const PaginationRightButton = styled.button`
    align-items: center;
    display: flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    line-height: 140%;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;
    @media (max-width: 756px) {
        padding: 7.5px 12px;
    }; 

    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            color: -internal-light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
        }
    `} 
`;

export const PaginationButtonText = styled.div`
    @media (max-width: 756px) {
        display:none
    }; 
`;

export const PaginationRightButtonMax = styled.button`
    align-items: center;
    display: flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    line-height: 140%;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;
    @media (min-width: 756px) {
        display:none
    }; 
    @media (max-width: 756px) {
        padding: 7.5px 12px;
    }; 
    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            color: -internal-light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
        }
    `} 
`;

export const PaginationRightButtonNextPage = styled.button`
    align-items: center;
    display: flex;
    padding: 8px 16px;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    line-height: 140%;
    border-color:none;
    border-style:none;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.woodSmoke};
    cursor: pointer;
    @media (max-width: 756px) {
        display:none
    }; 
    ${({ disabled }) => disabled && css`
        {
            background: ${({ theme }) => theme.color.mystic};
            color: -internal-light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
        }
    `} 
`;