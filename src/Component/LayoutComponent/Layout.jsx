import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import SideNav from "./SideNavSection/SideNav.jsx";
// import { useState } from "react";
// import Top from "./TopSectionComponent/Top.jsx";

const Layout = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.side}>
        <SideNav />
      </div>
      <div className={styles.left}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
