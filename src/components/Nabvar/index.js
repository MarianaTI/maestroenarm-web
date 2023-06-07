import React, { useState } from "react";
import Link from "next/link";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import {
  CustomNavLi,
  CustomNavUl,
  EnarmIcon,
  Header,
} from "./index.style";
import MenuOption from "../MenuIcon";
import { MenuItem, Popover, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";

const links = [
  {
    label: "Examenes",
    route: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Estadisticas",
    route: "/estadisticas",
    icon: <TrendingUpIcon />,
    suboptions: [
      {
        label: "Universidades",
        route: "/estadisticas/universidades",
        icon: <SchoolIcon />,
      },
      {
        label: "Usuarios",
        route: "/estadisticas/usuarios",
        icon: <GroupIcon />,
      },
    ],
  },
  {
    label: "Ranking",
    route: "/ranking",
    icon: <BarChartIcon />,
  },
  {
    label: "Nosotros",
    route: "/nosotros",
    icon: <PersonIcon />,
  },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    const { label } = event.currentTarget.dataset;
    if (label === "Estadisticas") {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Header>
      <nav>
        <CustomNavUl>
          <EnarmIcon>Maestro ENARM</EnarmIcon>
          {links.map(({ label, route, icon, suboptions }) => (
            <CustomNavLi
              key={route}
              data-label={label}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {icon}
              <Link href={route}>{label}</Link>
              {label === "Estadisticas" && suboptions && (
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleMouseLeave}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <List>
                    {suboptions.map(({ label, route, icon }) => (
                      <ListItem button key={route} component={Link} href={route}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label} />
                      </ListItem>
                    ))}
                  </List>
                </Popover>
              )}
            </CustomNavLi>
          ))}
          <MenuOption />
        </CustomNavUl>
      </nav>
    </Header>
  );
}
