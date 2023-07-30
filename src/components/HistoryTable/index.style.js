import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CustomUl = styled.ul`
    margin: 24px 0; 
    max-width: 1220px; 
    display: flex; 
    justify-content: start; 
    padding: 0; 
    gap: 16px; 
    flex-wrap: wrap
`;

const liStyled = ({ isSelected }) => css`
    list-style: none;
    border-bottom: ${isSelected ? "3px solid rgba(72, 74, 132, 1)" : 'none'} ;
`;

export const CustomLi = styled.li`
    cursor: pointer;
    ${liStyled}
`;