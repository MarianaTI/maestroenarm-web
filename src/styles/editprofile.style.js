import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-right: 40%;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const StyledTextContainer = styled.div`
  gap: 120px;
  font-family: "Poppins";
  font-size: 10px;
  color: #000000;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  padding-top: 70px;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const StyledSubmitButton = styled.input`
  height: 50px;
  width: 180px;
  background-color: #052970;
  border-radius: 15px;
  font-size: 12px;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 500;
  cursor: pointer;
  left: 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const StyledSubmitButtonContainer = styled.div`
  margin-left: 400%;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;