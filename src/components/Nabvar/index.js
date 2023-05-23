import Link from "next/link"
import styles from "./nabvar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Icon, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';



const links = [
  {
    label: 'Examenes',
    route: '/',
    icon: faHome
  },
  {
    label: 'Estadisticas',
    route: '/estadisticas',
    icon: faBars
  },
  {
    label: 'Ranking',
    route: '/ranking',
    icon: faBarsStaggered
  },
  {
    label: "Nosotros",
    route: "/nosotros",
    icon: faUser

  }
]

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          <a className={styles.p}> Maestro ENARM</a>
          {links.map(({ label, route, icon }) => (
            <li key={route}>
              <span className={styles.icon}>
                <FontAwesomeIcon icon={icon} />
                <Icon Size={1} />
              </span>
              <Link href={route}>
                {label}
              </Link>
            </li>))}
            <IconButton className={styles.iconButton}>
              <MenuIcon/>
            </IconButton>
        </ul>
      </nav>
    </header>)
}






