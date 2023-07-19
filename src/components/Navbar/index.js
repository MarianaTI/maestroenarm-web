import React, { useState } from "react";
import Link from "next/link";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import {
  CustomNavLi,
  CustomNavUl,
  EnarmIcon,
  IconWrapper,
  NavContent,
} from "./index.style";
import MenuOption from "../MenuIcon";
import { Popover, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch } from "react-redux";
import { openNavDrawer } from "../../store/slices/navDrawerSlice";

const links = [
  {
    label: "Examenes",
    route: "/home",
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
  {
    label: "Academy",
    route: "/academy",
    icon: <SchoolIcon />,
    suboptions: [
      {
        label: "Inicio",
        route: "/academy",
        icon: <HomeIcon />,
      }, ,
      {
        label: "Libros",
        route: "/academy/books",
        icon: <MenuBookOutlinedIcon />,
      },
      {
        label: "Audiolibros",
        route: "/academy/audiobooks",
        icon: <PlayLessonOutlinedIcon />,
      },
      {
        label: "Videos",
        route: "/academy/videos",
        icon: <PlayCircleOutlinedIcon />,
      },
      {
        label: "Compras",
        route: "/academy/shopping-bag",
        icon: <ShoppingBagIcon />,
      },
      {
        label: "Historial",
        route: "/academy/shopping-bag/history",
        icon: <HistoryIcon />,
      },
    ]
  }
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    const { label } = event.currentTarget.dataset;
    if (label === "Estadisticas" || label === "Ranking" || label === "Academy") {
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

  const [academyAnchorEl, setAcademyAnchorEl] = useState(null);

  const handleAcademyMouseEnter = (event) => {
    setAcademyAnchorEl(event.currentTarget);
  };

  const handleAcademyMouseLeave = () => {
    setAcademyAnchorEl(null);
  };

  const academyOpen = Boolean(academyAnchorEl);
  const dispatch = useDispatch();

  return (
    <NavContent>
      <IconWrapper>
        <IconButton onClick={() => dispatch(openNavDrawer())}>
          <MenuIcon />
        </IconButton>
      </IconWrapper>
      <EnarmIcon>Maestro ENARM</EnarmIcon>
      <CustomNavUl>
        {links.map(({ label, route, icon, suboptions }) => (
          <CustomNavLi
            key={route}
            data-label={label}
            onPointerEnter={label === "Estadisticas" ? handleMouseEnter : label === "Ranking" ? handleRankingMouseEnter : label === "Academy" ? handleAcademyMouseEnter : null}
            onMouseLeave={label === "Estadisticas" ? handleMouseLeave : label === "Ranking" ? handleRankingMouseLeave : label === "Academy" ? handleAcademyMouseLeave : null}
          >
            {icon}
            <Link href={route}>{label}</Link>
            {(label === "Estadisticas" || label === "Ranking" || label === 'Academy') && suboptions && (
              <Popover
                open={label === "Estadisticas" ? open : label === "Ranking" ? rankingOpen : academyOpen}
                anchorEl={label === "Estadisticas" ? anchorEl : label === "Ranking" ? rankingAnchorEl : academyAnchorEl}
                onClose={label === "Estadisticas" ? handleMouseLeave : label === "Ranking" ? handleRankingMouseLeave : handleAcademyMouseLeave}
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
                    <ListItem key={route} component={Link} href={route}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={label} />
                    </ListItem>
                  ))}
                </List>
              </Popover>
            )}
          </CustomNavLi>
        ))}
      </CustomNavUl>
      <MenuOption />
    </NavContent>
  );
}
