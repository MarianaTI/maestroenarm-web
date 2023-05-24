import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  Link,
  Button,
  DialogTitle,
  Grid,
} from "@mui/material";
 
export const RegisterGrid = styled(Grid)`
    height: 100vh;
    background-color: #f4f4f4;
    width: 100%;
    padding: 8px;
    & h1 {
    font-size: 32px;
    font-weight: 600;
    color: #052970;
  }
`;
export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100vh;
  font-size: 14px;
  & span {
    color: #000000;
  }
`;