import styled from "@emotion/styled";
import { Box, Link, Button, Grid } from "@mui/material";
import NextImage from "next/image";

export const Container = styled.div`
  font-family: "Poppins";
  & h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 300px;
    color: #052970;
  }
`;
export const AboutContainer = styled.div`
  display: flex;
  margin: 80px;
  margin-top: 10px;
  & p {
    font-size: 18px;
  }
`;
export const ImageStyle = styled(NextImage)`
  align-items: center;

  
`;
export const AvatarsContainer = styled.div`
  display: flex;
  margin: 30px;
`;
export const AboutCard = styled(Box)`
  padding: 5px;
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  margin: 10px;
  & h3 {
    text-align: center;
    font-size: 15px;
    margin: 5px;
  }
  & p {
    text-align: justify;
    margin: 10px;
  }
`;

