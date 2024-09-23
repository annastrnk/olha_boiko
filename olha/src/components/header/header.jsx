
import { Link, NavLink } from "react-router-dom"
import styles from './header.module.scss'; 

export default function Header() {

  return(
    <header className={styles.header}>
      <div className={styles.logo}>
      <NavLink to="/" >home</NavLink>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/about" className={styles.navLink}>Про мене</NavLink>
        <NavLink to="/consultation" className={styles.navLink}> Консультації</NavLink>
        <NavLink to="/courses" className={styles.navLink}>Курси</NavLink>
        <NavLink to="/articles" className={styles.navLink}>Корісні статті</NavLink>
        <NavLink to="/contact" className={styles.navLink}>Контакти</NavLink>
      </nav>
      <div>
        <Link href="/appointment">
          <button className={styles.button}>Записатися</button>
        </Link>
      </div>
    </header>
  
  
)
  }