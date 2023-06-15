import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FieldWrapper = styled.button`
  width: 100%;
  background: #fcfcfc;
  border: 2px solid #b9b9b9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 92px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:nth-of-type(2), :nth-of-type(4)) {
    margin-bottom: 16px;
  }

  &:disabled:hover {
    background: #fcfcfc;
  }

  &:hover {
    background: rgba(5, 41, 112, 0.2);
  }

  &:disabled div {
    background: gray;
  }
`;

export const Label = styled.span`
  font-size: 24px;
  font-weight: 500;
  padding-left: 48px;
`;

export const FieldDecoration = styled.div`
  position: absolute;
  width: 26px;
  background: #052970;
  top: 0;
  bottom: 0;
`;
