import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: -20px;
  left: 10px;
  color: black;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  background-color: rgb(192, 192, 207);
  border-radius: 5px;
  width: 250px;
  height: 45px;
  color: black;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 16px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;

export const StyledSelect = styled.select`
   background-color: rgb(192, 192, 207);
  border-radius: 5px;
  width: 250px;
  height: 45px;
  color: black;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 16px;
`;
