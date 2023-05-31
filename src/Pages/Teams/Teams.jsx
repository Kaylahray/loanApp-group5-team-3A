/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import styles from '../Teams/Teams.module.scss';
import TeamsTable from './TeamsTable/TeamsTable';


const Teams = () => {
  return (
    <div className={styles.teamscontainer}>

      <div className={styles.tops}>
        <div className={styles.topleft}>
        <h1>Teams</h1>
        <div className={styles.teamssearchbar}>
          <input type="text" placeholder="Search" />
        </div>
        </div>
        <div className={styles.addteambutton}>
          <a href="/addteammember">
          <button>Add Team Member</button>
          </a>
        </div>
      
      </div>
      <div className={styles.teamtop}>
                <a href="/" className={styles.teamall}>All (200)</a>
                <a href="/">Admin (20)</a>
                <a href="/">Analyst (180)</a>
            </div>

      <TeamsTable />

      
    </div>
  );
};

export default Teams;
