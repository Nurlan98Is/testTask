import { NavLink } from "react-router";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/products"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            Products
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
