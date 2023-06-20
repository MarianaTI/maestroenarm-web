import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)`
  text-transform: none;
    border-radius: 12px;
    font-size: 12px;
    color: #ffffff;
    font-family: "Poppins";
    font-weight: 400;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    ${props => ({
        background: props.theme === 'secondary'
            ? 'rgba(72, 74, 132, 1)' : props.theme === 'warning'
                ? 'rgba(255, 170, 43, 1)'
                : '#052970',
        height: props.size === 'large' ? '54px'
            : props.size === 'small'
                ? '32px' : '40px',
        ":hover": {
            background: props.theme === 'secondary'
                ? 'rgba(72, 74, 132, .9)'
                : props.theme === 'warning'
                ? 'rgba(255, 170, 43, .7)' : '#05297099'
        }
    })}
`;
