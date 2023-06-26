import React, { useState } from "react";
import { useRouter } from "next/router";
import { StyledButton, StyledMenuItem } from "./index.style";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Menu from "@material-ui/core/Menu";
import { ListItemIcon } from "@material-ui/core";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { History } from "@material-ui/icons";
import { signOut } from "../../store/slices/authSlice";

const MenuOption = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();

    const handleButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSettingsClickShopingBag = () => {
        router.push("/academy/shopping-bag");
        handleMenuClose();
    };
    const handleSettingsClickHistory = () => {
        router.push("/academy/shopping-bag/history");
        handleMenuClose();
    };

    const handleSettingsClick = () => {
        router.push("/edit-profile");
        handleMenuClose();
    };
    const handleSettingsClickPaymentPlans = () => {
        router.push("/payment-plans");
        handleMenuClose();
    };


    const handleSettingsClickAjust = () => {
        router.push("/profile-settings");
        handleMenuClose();
    };

    const handleSettingsClickClosed = () => {
        router.push("/sesion");
        dispatch(signOut())
        handleMenuClose();
    };

    return (
        <>
            <IconButton
                onClick={handleButtonClick}
                color="inherit"
                style={{ marginLeft: "auto", marginRight: 28 }}
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                id="options-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <StyledMenuItem onClick={handleSettingsClick} style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
                    {user.email.split('@')[0].toUpperCase()}
                </StyledMenuItem>
                <StyledMenuItem style={{ marginRight: "auto" }} onClick={handleSettingsClickPaymentPlans}>
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
                <StyledMenuItem onClick={handleSettingsClickShopingBag} style={{ fontFamily: "Poppins" }}>
                    {user.email}
                </StyledMenuItem>
                <StyledMenuItem onClick={handleSettingsClickAjust} style={{ fontFamily: "Poppins" }}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    Ajustes
                </StyledMenuItem>
                <StyledMenuItem onClick={handleSettingsClickHistory} style={{ fontFamily: "Poppins" }}>
                    <ListItemIcon>
                        <History />
                    </ListItemIcon>
                    Historial
                </StyledMenuItem>
                <StyledMenuItem onClick={handleSettingsClickClosed} style={{ fontFamily: "Poppins" }}>
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
