import React from "react";
import { ButtonStyled } from "./index.style";
import DownloadIcon from '@mui/icons-material/Download';

const CustomButtonAcademy = ({ buttonText, onClick, type, showIcon }) => {
  return (
    <ButtonStyled fullwidth="true" onClick={onClick} type={type}>
      {showIcon ? <DownloadIcon /> : buttonText}
    </ButtonStyled>
  );
};

export default CustomButtonAcademy;

