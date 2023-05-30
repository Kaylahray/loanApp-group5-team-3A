import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.scss";

const SideNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink to={"/layout/dashboard"}> Dashboard</NavLink>
      <NavLink to={"/layout/application"}> Application</NavLink>

      <NavLink to={"/layout/models"}> Models</NavLink>
      <NavLink to={"/layout/settings"}> Settings</NavLink>

      <NavLink to={"/layout/teams"}> Teams</NavLink>
      <NavLink to={"/layout/faq"}> FaQs</NavLink>
      <NavLink to={"/layout/chats"}> Chats</NavLink>
      <NavLink to={"/layout/logout"}> Logout</NavLink>
    </div>
  );
};

export default SideNav;
