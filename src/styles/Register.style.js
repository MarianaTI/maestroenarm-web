import styled from "@emotion/styled";

//----------------nuevo-----------------
export const RegisterContainer = styled.div`
  background-color: #f4f4f4;
  height: 100vh;
  width: 100%;
  padding: 8px;
    & h1 {
    font-size: 25px;
    font-weight: 600;
    color: #052970;
  }
`;
export const CardStyle = styled.div`
  max-width: 500px;
  height: 500px;
  display: flex;
  margin: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    color: #00000090;
    font-weight: 500;
    padding: 5px;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
  }
`;
export const ImageStyle = styled.img`
  background-image: url(./registerphoto2.svg);

`;
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 60vh;
  font-size: 14px;
  & span {
    color: #000000;
  }
`;

export const Button = styled.button`
  width: 285px;
  height: 50px;
  background-color: #052970;
  border-radius: 15px;
  font-size: 12px;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 400;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 15px;
  margin: 20px;
  border: none;
  &:hover {
    background: #05297099;
  }
`;
export const LoginContainer = styled.div`
  padding: 5px;
  & span {
    display: inline;
  }
`;
export const LinkLog = styled.div`
  padding-left: 16px;
  font-size: 14px;
  color: #052970;
  font-weight: 600;
  text-decoration: none;
  display: inline;
`;