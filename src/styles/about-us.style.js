import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NextImage from "next/image";

export const Container = styled.div`
  max-width: 100%;
  padding: 38px 32px;
  font-family: "Poppins";
  & h1 {
    font-weight: 300px;
    color: #052970;
    text-align: center;

  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  @media (min-width: 1020px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ImageStyle = styled(NextImage)`
  width: 100%;
  height: auto;
  max-width: 500px;
  @media (min-width: 768px) {
    margin-top: 0;
    flex-basis: 30%;
  }
`;

export const AvatarsContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutCard = styled(Box)`
  height: auto;
  background-color: #f4f4f4;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
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

