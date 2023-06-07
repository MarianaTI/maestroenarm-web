import React, { useState } from "react";
import { StyledButton, StyledMenuItem } from "./index.style";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Menu from "@material-ui/core/Menu";
import { ListItemIcon } from "@material-ui/core";

const MenuOption = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledButton
                aria-controls="options-menu"
                aria-haspopup="true"
                onClick={handleButtonClick}
                startIcon={<MenuIcon />}
                variant="contained"
                color="primary"
            />
            <Menu
                id="options-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <StyledMenuItem onClick={handleMenuClose} style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
                    angelricardez002
                </StyledMenuItem>
                <StyledMenuItem style={{ marginRight: "auto" }} onClick={handleMenuClose}>
                    <StyledButton
                        variant="contained"
                        color="warning"
                        style={{
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                            backgroundColor: "#FFC107",
                            color: "#fff",
                            marginLeft: "1px",
                            borderRadius: "15px"
                        }}
                    >
                        Mejora tu plan
                    </StyledButton>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose} style={{ fontFamily: "Poppins" }}>
                    angel.ricardez@buencodigo.dev
                </StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose} style={{ fontFamily: "Poppins" }}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    Ajustes
                </StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose} style={{ fontFamily: "Poppins" }}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    Cerrar Sesión
                </StyledMenuItem>
            </Menu>
        </>
    );
};

export default MenuOption;
