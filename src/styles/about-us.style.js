import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NextImage from "next/image";

export const Container = styled.div`
  max-width: 100%;
  padding: 64px 32px;
  font-family: "Poppins";
  & h1 {
    font-weight: 300px;
    color: #052970;
  }

  & h2 {
    text-align: center;
    font-weight: 300px;
    color: #052970;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  & div p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media (min-width: 1020px) {
    flex-direction: row;
    justify-content: space-between;
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
  display: grid;
  gap: 1.2em;
  grid-template-columns: repeat(auto-fit, minmax(min(210px, 100%), 1fr));
`;

export const AboutCard = styled(Box)`
  height: auto;
  background-color: #f4f4f4;
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

