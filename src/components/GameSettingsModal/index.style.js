import styled from "@emotion/styled";
import { Box } from "@mui/material";


export const ModalBody = styled(Box)`
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 778px;
    height: 317px;
    border: 2px solid #b9b9b9;
    box-shadow: 24px;
    padding: 32px;
    border-radius: 16px;
`;

export const RangeContainer = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 16px; 
    flex-direction: column
`;