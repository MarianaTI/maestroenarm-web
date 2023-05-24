import styled from "@emotion/styled";

export const InputStyled = styled.input`
padding-right: 40px;
  margin: 8px 0px 8px 0px;
  width: 100%;
  background-color: #ebebeb;
  border-radius: 10px;
  height: 50px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
`;
