import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const ModalBody = styled(Box)`
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 2px solid #b9b9b9; */
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

export const CloseIconStyle = styled(CloseIcon)`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`;

export const SpecialityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; // Alinear los botones a la izquierda en la columna
    gap: 12px; // Espaciado entre los botones
    width: 100%;

`;

export const SpecialityText = styled.button`
    width: 100%;
    height: 37px;
    border: 0.5px solid #052970;
    border-radius: 15px;
    background: #ECECEC;
    font-family: 'Poppins';
    :hover {
        background-color:#fff;
    }
`;

export const SubSpecialityText = styled.span`

`;
