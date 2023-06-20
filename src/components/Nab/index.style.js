import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const Header = styled.header`
    border: 2px solid #f0f0f0;
    background-color: white;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: rgb(16, 10, 95);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
`;

export const CustomNavUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    font-size: medium;
    gap: 60px;
    font-family: Poppins;
    font-weight: bold;
`;

export const EnarmIcon = styled.span`
    color: black;
    display: flex;
    font-family: Poppins;
    font-size: large;
    margin-top: 8px;
`;

export const CustomNavLi = styled.li`
    display: flex;
    gap: 16px;
    align-items: center;
    @media screen and (max-width: 900px){
        display: none;
    }
`;

export const CustomIconButton = styled(IconButton)`
    color: rgb(16, 10, 95);
    margin-left: auto;
    margin-right: 50px;
  
`;