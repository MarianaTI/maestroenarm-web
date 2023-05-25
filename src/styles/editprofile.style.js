import styled from "@emotion/styled";

export const EditProfile = styled.div`
  background-color: #f4f4f4;
  height: 100vh;
  width: 100%;
  padding: 8px;
  & h1 {
    font-size: 35px;
    font-weight: 600;
    color: #052970;
  }

`;
export const ImageStyle = styled.image`


`;
export const CardStyle = styled.div`
    max-width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
    & span {
        color: #00000090;
        font-weight: 500;
        padding: 5px;
        letter-spacing: -0.01em;
        font-feature-settings: "calt" off;
  }
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
export const SelectStyle = styled.select`

`;
export const Button = styled.button`
  
`;