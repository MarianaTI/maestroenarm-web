import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NextImage from "next/image";

export const Container = styled.div`
  max-width: 100%;
  padding: 60px;
  font-family: "Poppins";
  & h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 300px;
    color: #052970;
    padding: 20px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  & p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    

    & p {
      flex-basis: 60%;
    }
  }
`;

export const ImageStyle = styled(NextImage)`
  width: 100%;
  height: auto;
  max-width: 500px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    flex-basis: 30%;
  }
`;

export const AvatarsContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutCard = styled(Box)`
  padding: 5px;
  width: 300px;
  height: auto;
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  margin: 15px;
  & h3 {
    text-align: center;
    font-size: 15px;
    margin: 5px;
  }
  & p {
    text-align: center;
    margin: 10px;
  }
`;

