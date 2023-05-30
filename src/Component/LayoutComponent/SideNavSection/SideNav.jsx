import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.scss";
import Logo from "./SLogo.svg"
import { FiSettings } from "react-icons/fi"
import { BiCategory } from "react-icons/bi"
import { HiOutlineDocumentDuplicate } from "react-icons/hi"
import { HiOutlineUserGroup } from "react-icons/hi"
import { BsQuestionCircle } from "react-icons/bs"
import { BsChatDots } from "react-icons/bs"
import { SlLogout } from "react-icons/sl"
import { RxStack } from "react-icons/rx"

const SideNav = () => {
  return (
    <div className={styles.nav}>
      <img src={Logo} alt="logo" className={styles.slogo} />
      
      <div className={styles.navlinkContainer}>
        <div className={styles.topS}> 
          <div className={styles.nav1}>< BiCategory /> <NavLink to={"/layout/dashboard"} className={styles.navl}> Dashboard</NavLink></div>
          <div className={styles.nav1}><HiOutlineDocumentDuplicate /><NavLink to={"/layout/application"} className={styles.navl}> Application</NavLink></div>
          <div className={styles.nav1}>< RxStack /><NavLink to={"/layout/models"} className={styles.navl}> Models</NavLink></div>
          <div className={styles.nav1}>< FiSettings /> <NavLink to={"/layout/settings"} className={styles.navl}>Settings</NavLink></div>
          <div className={styles.nav1}>< HiOutlineUserGroup /><NavLink to={"/layout/teams"} className={styles.navl}> Teams</NavLink></div>
        </div>

        <div className={styles.bottomS}> 
          <div className={styles.nav1}>< BsQuestionCircle /><NavLink to={"/layout/faq"} className={styles.navl}> FaQs</NavLink></div>
          <div className={styles.nav1}>< BsChatDots /><NavLink to={"/layout/chats"} className={styles.navl}> Chats</NavLink></div>
          <div className={styles.nav1}>< SlLogout /><NavLink to={"/layout/logout"} className={styles.navl}> Logout</NavLink></div>
        </div>
      </div>
      
    </div>
  );
};

export default SideNav;
