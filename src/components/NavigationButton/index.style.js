import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  height: 70px;
  gap: 12px;
  background-color: #fcfcfc;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 68px;
    background-color: #052970;
    border-radius: 10px;
  }

  &:hover {
    background-color: #d0d7e4;
  }

  &:disabled {
    background-color: #e0e4ed;
    cursor: not-allowed;
  }

  & > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    padding-left: 35px;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
    color: #000000;
  }
`;
