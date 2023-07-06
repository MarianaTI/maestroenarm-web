import styled from "@emotion/styled";
import { Button } from "@mui/material";

const themes = {
  icon: "background:none; border:0; box-shadow: none; padding:8px; min-width:0px; border-radius:50%",
  primary: "background: #052970;",
  secondary: "background: rgba(72, 74, 132, 1);",
  warning: "background:rgba(255, 170, 43, 1);",
};
export const ButtonStyled = styled(Button)`
  text-transform: none;
  border-radius: 12px;
  font-size: 12px;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 400;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  svg {
    color: #052970;
  }
  ${(props) => {
    return themes[props.theme];
    // TODO
    // return {
    //   height:
    //     props.size === "large"
    //       ? "54px"
    //       : props.size === "small"
    //       ? "32px"
    //       : "40px",
    //   ":hover": {
    //     background:
    //       props.theme === "secondary"
    //         ? "rgba(72, 74, 132, .9)"
    //         : props.theme === "warning"
    //         ? "rgba(255, 170, 43, .7)"
    //         : "#05297099",
    //   },
    // };
  }}
`;
