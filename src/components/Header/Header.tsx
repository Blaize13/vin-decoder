import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          VIN Decoder
        </NavLink>

        <NavLink
          to="/variables"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          Variables
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;