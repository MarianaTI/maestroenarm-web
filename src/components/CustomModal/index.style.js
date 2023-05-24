import styled from "@emotion/styled";
import {Button } from "@mui/material";

export const ButtonStyled = styled(Button)`
  width: 350px;
  height: 40px;
  background-color: #052970;
  border-radius: 15px;
  font-size: 12px;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 500;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 15px;
  margin: 20px;
  &:hover {
    background: #05297099;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #f4f4f4;
  box-shadow: 24;
  padding: 2%;
  border-radius: 15px;
  & h1 {
    font-size: 16px;
    color: #000000;
    font-weight: 500;
  }
  & span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.74);
    font-weight: 500;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
  }
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
`;
