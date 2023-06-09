/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React from 'react';
// import SideNav from '../../Component/LayoutComponent/SideNavSection/SideNav';

import styles from '../Teams/Teams.module.scss';

import Tab from './Tab/Tab';

const Teams = () => {
  

  
  return (
    <div>
    <div className={styles.teamscontain}>
      <div className={styles.mainteamscontainer}>
      
      <div className={styles.teamstops}>
        <Tab />
    </div>
    </div>
    </div>
  </div>
  );
};

export default Teams;
