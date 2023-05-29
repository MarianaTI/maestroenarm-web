import Link from "next/link"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomIconButton, CustomNavLi, CustomNavUl, EnarmIcon, Header } from "./index.style";

const links = [
    {
      label: 'Examenes',
      route: '/',
      icon: <HomeIcon />
    },
    {
      label: 'Estadisticas',
      route: '/estadisticas',
      icon: <TrendingUpIcon />
    },
    {
      label: 'Ranking',
      route: '/ranking',
      icon: <BarChartIcon />
    },
    {
      label: "Nosotros",
      route: "/nosotros",
      icon: <PersonIcon />
    }
];

export default function Navbar() {
    return (
        <Header>
            <nav>
                <CustomNavUl>
                    <EnarmIcon> Maestro ENARM</EnarmIcon>
                    {links.map(({ label, route, icon }) => (
                        <CustomNavLi  key={route}>
                            {icon}
                            <Link href={route}>{label}</Link>
                        </CustomNavLi>))}
                    <CustomIconButton>
                        <MenuIcon />
                    </CustomIconButton>
                </CustomNavUl>
            </nav>
        </Header>
    );
}
