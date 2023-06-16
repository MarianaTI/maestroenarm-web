import Link from "next/link"
import styles from "./NavbarStatistics.module.css"
import { Icon, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          <a className={styles.p}> Maestro ENARM</a>
          
            <IconButton className={styles.iconButton}>
              <MenuIcon/>
            </IconButton>
        </ul>
      </nav>
    </header>)
}