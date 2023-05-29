import styled from "@emotion/styled";

export const InputStyled = styled.input`
  margin: 8px 0px 8px 0px;
  width: 100%;
  background-color: #ebebeb;
  border-radius: 10px;
  height: 50px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:focus {
   
  }
  &:not(:focus) {
    outline: none;
    border: none;
    font-family: "Poppins";
    font-size: 14px;
    padding: 8px;
  }
`;
export const LabelStyled = styled.label`
  font-size: 14px;
  color: #000000;
  font-weight: 500;
`;
