import styled from "@emotion/styled";

export const NavContent = styled.nav`
    padding: 4px 16px;
    border-bottom: 2px solid #052970;
    background: white;
    position: fixed;
    z-index: 999;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const CustomNavUl = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    font-size: medium;
    gap: 32px;
    font-weight: bold;
    @media screen and (max-width: 1020px){
        display: none;
    }
`;

export const EnarmIcon = styled.span`
    color: #052970;
    font-weight: 700;
    font-size: large;
    @media screen and (max-width: 300px) {
        display: none;
    }
`;

export const IconWrapper = styled.div`
    display: none;
    @media screen and (max-width: 1020px) {
        display: initial;
    }
`

export const CustomNavLi = styled.li`
    display: flex;
    gap: 16px;
    align-items: center;
`;
