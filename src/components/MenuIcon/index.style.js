import { styled } from "@mui/system";
import { Button, MenuItem, Menu } from "@mui/material";

export const StyledButton = styled(Button)`
  && {
    background-color: transparent;
    color: #000;
    box-shadow: none;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    color: #000;
    &:hover {
      background-color: #f5f5f5;
    }
    width: 300px;
    font-size: 14px;
    &:nth-of-type(4) {
      border-top: 1px solid #000;
      margin-top: -1px;
    }
  }
`;

export const StyledMenu = styled(Menu)`
  && {
    border-radius: 4px;
    border: 1px solid #000;
  }
`;



