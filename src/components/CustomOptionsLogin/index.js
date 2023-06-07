import React from "react";
import { ButtonIconStyled } from "./index.style";

const CustomOptionsLogin = ({ onClick, icon }) => {
  const iconStyle = {
    backgroundImage: `url(${icon})`,
  };

  return <ButtonIconStyled style={iconStyle} onClick={onClick} />;
};

export default CustomOptionsLogin;
