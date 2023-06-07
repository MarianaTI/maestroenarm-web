import * as React from 'react';
import Avatar from '@mui/material/Avatar';

const links = [
    {
      label: 'EstadoCuenta',
      route: '/estadoCuenta',
    },
   
  ]

  export default function Avatar({size}) {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <AvatarWrapper size={size}>
                <StyledAvatar size={size}></StyledAvatar>
            </AvatarWrapper>
            <div style={{ marginLeft: "10px" }}>
                <p style={{ margin: "0", fontFamily: "Poppins" , fontWeight: "bold"}}>Usuario</p>
                <span style={{ fontSize: "12px", fontFamily: "Poppins" }}>Agregar imagen</span>
            </div>
        </div>
    );
}
import { AvatarWrapper, StyledAvatar } from "./index.style"


