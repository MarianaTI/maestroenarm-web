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
    route: "/game",
    icon: <HomeIcon />,
  },
  {
    label: "Estadisticas",
    route: "/estadisticas",
    icon: <TrendingUpIcon />,
    suboptions: [
      {
        label: "Desempeño",
        route: "/case-statistics",
        icon: <SchoolIcon />,
      },
      {
        label: "Uso del app",
        route: "/statistics",
        icon: <GroupIcon />,
      },
    ],
  },
  {
    label: "Ranking",
    route: "/ranking",
    icon: <BarChartIcon />,
    suboptions: [
      {
        label: "Universidades",
        route: "/ranking-university",
        icon: <SchoolIcon />,
      },
      {
        label: "Usuarios",
        route: "/ranking-user",
        icon: <GroupIcon />,
      },
    ],
  },
  {
    label: "Nosotros",
    route: "/about-us",
    icon: <PersonIcon />,
  },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    const { label } = event.currentTarget.dataset;
    if (label === "Estadisticas" || label === "Ranking") {
      setAnchorEl(event.currentTarget);
    }
  };
  

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const [rankingAnchorEl, setRankingAnchorEl] = useState(null);

  const handleRankingMouseEnter = (event) => {
    setRankingAnchorEl(event.currentTarget);
  };

  const handleRankingMouseLeave = () => {
    setRankingAnchorEl(null);
  };

  const rankingOpen = Boolean(rankingAnchorEl);


  return (
    <Header>
      <nav>
        <CustomNavUl>
          <EnarmIcon>Maestro ENARM</EnarmIcon>
          {links.map(({ label, route, icon, suboptions }) => (
            <CustomNavLi
              key={route}
              data-label={label}
              onMouseEnter={label === "Estadisticas"? handleMouseEnter : label === "Ranking"? handleRankingMouseEnter : null}
              onMouseLeave={label === "Estadisticas"? handleMouseLeave : label === "Ranking"? handleRankingMouseLeave : null}
            >
              {icon}
              <Link href={route}>{label}</Link>
              {(label === "Estadisticas" || label === "Ranking") && suboptions && (
                <Popover
                open={label === "Estadisticas" ? open : rankingOpen}
                anchorEl={label === "Estadisticas" ? anchorEl : rankingAnchorEl}
                onClose={label === "Estadisticas" ? handleMouseLeave : handleRankingMouseLeave}
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
