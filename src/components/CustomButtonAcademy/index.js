import React from "react";
import { ButtonStyled } from "./index.style";
import DownloadIcon from '@mui/icons-material/Download';

const CustomButton = ({ buttonText, onClick, type, showIcon }) => {
  return (
    <ButtonStyled fullwidth="true" onClick={onClick} type={type} disabled>
      {showIcon ? <DownloadIcon /> : buttonText}
    </ButtonStyled>
  );
};

export default CustomButton;

