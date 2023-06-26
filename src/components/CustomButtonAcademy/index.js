import React from "react";
import { ButtonStyled } from "./index.style";
import DownloadIcon from '@mui/icons-material/Download';

const CustomButtonAcademy = ({ buttonText, onClick, type, showIcon, disabled }) => {
  return (
    <ButtonStyled fullwidth="true" onClick={onClick} type={type} disabled={disabled}>
      {showIcon ? <DownloadIcon /> : buttonText}
    </ButtonStyled>
  );
};

export default CustomButtonAcademy;

