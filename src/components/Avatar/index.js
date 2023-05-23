import * as React from 'react';
import Avatar from '@mui/material/Avatar';

const links = [
    {
      label: 'EstadoCuenta',
      route: '/estadoCuenta',
    },
   
  ]

  export default function AvatarComponent() {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 70, height: 70 }} />
            <div style={{ marginLeft: "10px" }}>
                <p style={{ margin: "0", fontFamily: "Poppins" , fontWeight: "bold"}}>Usuario</p>
                <span style={{ fontSize: "12px", fontFamily: "Poppins" }}>Ver estado de la cuenta</span>
            </div>
        </div>
    );
}
