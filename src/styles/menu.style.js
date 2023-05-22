import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const MenuContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 60px;
    
`;

export const StyledButton = styled(Button)`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    width: 1200px;
    margin-left: 5px;
    margin-bottom: 5px;
    background-color: #FCFCFC;
    justify-content: flex-start;
    color: #000;

    &:hover{
        background-color: #8294b7;
    }
`
