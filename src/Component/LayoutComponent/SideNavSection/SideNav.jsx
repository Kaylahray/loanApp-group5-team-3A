/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
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
