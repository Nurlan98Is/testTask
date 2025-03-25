import { Outlet } from "react-router";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <div className={styles.main_container}>
      <Outlet />
    </div>
  );
};
