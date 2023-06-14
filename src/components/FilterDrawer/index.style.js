import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";

export const DrawerHeader = styled.span`
    margin: auto 16px;
    font-size: 26px;
    font-weight: bold;
`;

export const DrawerBody = styled(Box)`
    width: 300px;
`;

export const Container = styled.div`
    padding-top: 16px;
    display: flex;
    justify-content: space-between
`;

export const IconButtonStyled = styled(IconButton)`
    margin: 10px 9px 10px 18px
`;
