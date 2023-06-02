import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.scss";
import Logo from "./SLogo.svg";
import { FiSettings } from "react-icons/fi";
import { BiCategory, BiGroup } from "react-icons/bi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BsQuestionCircle } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import { RxStack } from "react-icons/rx";
import { useState } from "react";

const links = [
  {
    id: 0,
    name: "Dashboard",
    to: "/layout/dashboard",
    icon: <BiCategory />,
  },
  {
    id: 1,
    name: "Application",
    to: "/layout/application",
    icon: <HiOutlineDocumentDuplicate />,
  },
  {
    id: 2,
    name: "Models",
    to: "/layout/models",
    icon: <RxStack />,
  },
  {
    id: 3,
    name: "Settings",
    to: "/layout/setting",
    icon: <FiSettings />,
  },
  {
    id: 4,
    name: "Teams",
    to: "/layout/teams",
    icon: <BiGroup />,
  },
];

const bottom = [
  {
    id: 5,
    name: "FaQ",
    to: "/layout/faq",
    icon: <BsQuestionCircle />,
  },
  {
    id: 6,
    name: "chats",
    to: "/layout/chats",
    icon: <BsChatDots />,
  },
  {
    id: 7,
    name: "Log out",
    to: "/layout/logout",
    icon: <SlLogout />,
  },
];
const SideNav = () => {
  const [link, setLink] = useState(0);
  return (
    <div className={styles.nav}>
      <img src={Logo} alt="logo" className={styles.slogo} />

      <div className={styles.navlinkContainer}>
        <div className={styles.topS}>
          {links.map((item) => {
            const { id, name, to, icon } = item;
            return (
              <div
                key={id}
                onClick={() => setLink(id)}
                className={
                  link === id
                    ? `${styles.nav1}  ${styles.active}`
                    : `${styles.nav1}`
                }
              >
                {icon}
                <NavLink to={to} className={styles.navl}>
                  {name}
                </NavLink>
              </div>
            );
          })}
        </div>

        <div className={styles.bottomS}>
          {bottom.map((item) => {
            const { id, name, to, icon } = item;
            return (
              <div
                key={id}
                onClick={() => setLink(id)}
                className={
                  link === id
                    ? `${styles.nav1}  ${styles.active}`
                    : `${styles.nav1}`
                }
              >
                {icon}
                <NavLink to={to} className={styles.navl}>
                  {name}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

{
  /* <div className={styles.nav1}>
<HiOutlineDocumentDuplicate />
<NavLink to={"/layout/application"} className={styles.navl}>
  {" "}
  Application
</NavLink>
</div>
<div className={styles.nav1}>
<RxStack />
<NavLink to={"/layout/models"} className={styles.navl}>
  {" "}
  Models
</NavLink>
</div>
<div className={styles.nav1}>
<FiSettings />{" "}
<NavLink to={"/layout/settings"} className={styles.navl}>
  Settings
</NavLink>
</div>
<div className={styles.nav1}>
<HiOutlineUserGroup />
<NavLink to={"/layout/teams"} className={styles.navl}>
  {" "}
  Teams
</NavLink>
</div> */
}

{
  /* <div className={styles.nav1}>
<BsQuestionCircle />
<NavLink to={"/layout/faq"} className={styles.navl}>
  {" "}
  FaQs
</NavLink>
</div>
<div className={styles.nav1}>
<BsChatDots />
<NavLink to={"/layout/chats"} className={styles.navl}>
  {" "}
  Chats
</NavLink>
</div>
<div className={styles.nav1}>
<SlLogout />
<NavLink to={"/layout/logout"} className={styles.navl}>
  {" "}
  Logout
</NavLink>
</div> */
}
