import React from "react";
import { ButtonStyled } from "./index.style";
import DownloadIcon from '@mui/icons-material/Download';

export const CustomButton = ({ text, onClick, type, fullWidth = false,
  theme = "primary",
  children,
  size = "medium",
  showIcon
}) => {
  return (
    <ButtonStyled fullWidth={fullWidth} onClick={onClick} type={type}
      theme={theme}
      size={size}
    >
      {showIcon ? <DownloadIcon /> : children || text}
    </ButtonStyled>
  );
};
