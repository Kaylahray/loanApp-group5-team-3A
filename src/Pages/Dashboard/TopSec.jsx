import { Link } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import search from "./DashboardIcons/searchIcon.svg";

const TopSec = () => {
  return (
    <div className={styles.dashnav}>
      <div className={styles.dashleft}>
        <h3>Hi Tofunmi</h3>

        <div className={styles.dashinput}>
          <img src={search} alt="img" className={styles.img} />
          <input
            className={styles.mysearch}
            type="text"
            placeholder="Search"
            // value={query}
            // onChange={(e) => {
            //   setQuery(e.target.value);
            // }}
          />
        </div>
      </div>

      <div className={styles.dashright}>
        <button className={styles.dashnavbtn}>
          {" "}
          <Link to={"/model"}> Create Model</Link>
        </button>
        <div className={styles.profile}> </div>
      </div>
    </div>
  );
};

export default TopSec;
