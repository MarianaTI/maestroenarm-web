import styled from "@emotion/styled";

export const InputStyled = styled.input`
  width: 100%;
  margin: 4px 0px 8px 0px;
  background-color: #ebebeb;
  border-radius: 4px;
  height: 50px;
  border: none;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
    border: none;
    font-family: "Poppins";
    font-size: 14px;
    padding: 8px;
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
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  padding-left: 16px;
  color: red;
`;
