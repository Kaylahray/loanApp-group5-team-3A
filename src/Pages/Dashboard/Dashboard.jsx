import Top from "../../Component/LayoutComponent/TopSectionComponent/Top";
import search from "./DashboardIcons/searchIcon.svg";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.body}>
      <Top>
        <div className={styles.dashnav}>
          <div className={styles.dashleft}>
            <h3>Hi Tofunmi</h3>

            <div className={styles.dashinput}>
              <img src={search} alt="img" className={styles.img} />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className={styles.dashright}>
            <button className={styles.dashnavbtn}>Create Model</button>
            <div className={styles.profile}> </div>
          </div>
        </div>
      </Top>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}

      {/* <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.one}>
              <h4 className={styles.applicant}>Total Applicants</h4>
              <p className={styles.paragraph}> 500 </p>
            </div>
            <div className={styles.two}>
              <h4 className={styles.applicant}>Default Applicants</h4>
              <p className={styles.paragraph}>250 </p>
            </div>
            <div className={styles.three}>
              <h4 className={styles.applicant}>Pending Applicants</h4>
              <p className={styles.paragraph}>250</p>
            </div>
          </div>
        </div>
        <div className={styles.right}> bjjjj</div>
      </div> */}
    </div>
  );
};

export default Dashboard;
