import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import SideNav from "./SideNavSection/SideNav.jsx";
// import Top from "./TopSectionComponent/Top.jsx";

const Layout = () => {
  return (
    <div className={styles.grid}>
      <SideNav />
      <div className={styles.left}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
