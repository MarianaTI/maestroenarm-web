import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { Container, EnarmIcon } from './index.style';
import { IconButton } from '@mui/material';
import { addCollapse, closeNavDrawer } from '../../store/slices/navDrawerSlice';

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from '@mui/icons-material/History';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import Link from 'next/link';

const links = [
    {
        label: "Examenes",
        route: "/home",
        icon: <HomeIcon />,
    },
    {
        label: "Nosotros",
        route: "/about-us",
        icon: <PersonIcon />,
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
                label: "Usuarios",
                route: "/ranking",
                icon: <GroupIcon />,
            },
            {
                label: "Universidades",
                route: "/ranking/universities",
                icon: <SchoolIcon />,
            },
        ],
    },
    {
        label: "Academy",
        route: "/academy",
        icon: <SchoolIcon />,
        subOptions: [
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
        ],
    },
];

function ExpandedOption({ subOptions, isOpen }) {
    return (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List style={{ padding: "0 16px" }}>
                {subOptions.map(({ label, route, icon }) => <Link key={label} href={route}>
                    <ListItemButton>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItemButton>
                </Link>)}
            </List>
        </Collapse>
    )
}

function NavDrawerItem({ label, icon, subOptions, route }) {
    const { collapseList } = useSelector(state => state.navDrawer)
    const dispatch = useDispatch()
    const isExpanded = collapseList.includes(label)
    function handleExpanded() {
        if (!collapseList.includes(label)) dispatch(addCollapse([...collapseList, label]))
        if (collapseList.includes(label)) dispatch(addCollapse(collapseList.filter(collapseName => collapseName !== label)))
    }
    return (
        <>
            {subOptions ? <>
                <ListItem key={label} disablePadding>
                    <ListItemButton onClick={handleExpanded}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} />
                        {subOptions && (isExpanded ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                </ListItem> <ExpandedOption subOptions={subOptions} isOpen={isExpanded} />
            </> : <ListItem key={label} disablePadding>
                <Link style={{ width: "100%" }} href={route}>
                    <ListItemButton>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItemButton>
                </Link>
            </ListItem>}
        </>
    )
}

export default function NavDrawer() {
    const { isOpen } = useSelector(state => state.navDrawer);
    const dispatch = useDispatch()
    return (
        <div>
            <Drawer
                anchor="left"
                open={isOpen}
            >
                <Box
                    sx={{ width: 300 }}
                    role="presentation"
                >
                    <Container>
                        <EnarmIcon>Maestro ENARM</EnarmIcon>
                        <IconButton onClick={() => dispatch(closeNavDrawer())}>
                            <CloseIcon />
                        </IconButton>
                    </Container>
                    <List>
                        {links.map(({ label, route, icon, subOptions = null }) => <NavDrawerItem
                            key={label}
                            icon={icon}
                            label={label}
                            route={route}
                            subOptions={subOptions}
                        />)}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}