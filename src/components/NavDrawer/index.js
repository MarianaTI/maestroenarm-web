import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItem } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./index.style";
import { IconButton } from "@mui/material";
import { closeNavDrawer } from "../../store/slices/navDrawerSlice";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import PlayLessonOutlinedIcon from "@mui/icons-material/PlayLessonOutlined";
import Link from "next/link";
import { useState } from "react";

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
    subOptions: [
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
    subOptions: [
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
    subOptions: [
      {
        label: "books",
        route: "/academy/books",
        icon: <MenuBookOutlinedIcon />,
      },
      {
        label: "audiobooks",
        route: "/academy/audiobooks",
        icon: <PlayLessonOutlinedIcon />,
      },
      {
        label: "videos",
        route: "/academy/videos",
        icon: <PlayCircleOutlinedIcon />,
      },
    ],
  },
];

function ExpandedOption({ subOptions, isOpen }) {
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <List style={{ padding: "0 16px" }}>
        {subOptions.map(({ label, route, icon }) => (
          <Link href={route}>
            <Link href={route}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </Link>
        ))}
      </List>
    </Collapse>
  );
}

function NavDrawerItem({ label, route, icon, subOptions }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem key={label} disablePadding>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
          {subOptions && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </ListItem>
      {subOptions && <ExpandedOption subOptions={subOptions} isOpen={open} />}
    </>
  );
}

export default function NavDrawer() {
  const { isOpen } = useSelector((state) => state.navDrawer);
  const dispatch = useDispatch();
  return (
    <div>
      <Drawer anchor="left" open={isOpen}>
        <Box sx={{ width: 300 }} role="presentation">
          <Container>
            <span>Options</span>
            <IconButton onClick={() => dispatch(closeNavDrawer())}>
              <CloseIcon />
            </IconButton>
          </Container>
          <List>
            {links.map(({ label, route, icon, subOptions = null }) => (
              <NavDrawerItem
                icon={icon}
                label={label}
                route={route}
                subOptions={subOptions}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
