import { Link } from "react-router-dom";
import DashChart from "./DashChart";
import DashData from "./DashData";
import styles from "./Dashboard.module.scss";
import Trail from "./Trail";

const Left = () => {
  // const isOdd = (value) => !isEven(value);
  const assigned = (item) => item.status === "Approved";
  const asn = DashData.filter(assigned).map((item) => {
    return item.id;
  });
  console.log(asn);

  return (
    <div className={styles.left}>
      <div className={styles.applicants}>
        <div className={styles.applicant_blue}>
          <h3>Total Applicants</h3>
          <p>500</p>
        </div>
        <div className={styles.applicant_yellow}>
          <h3>Default Applicants</h3>
          <p>250</p>
        </div>
        <div className={styles.applicant_green}>
          <h3>Pending Applicants</h3>
          <p>250</p>
        </div>
      </div>

      <div className={styles.chart}>
        <DashChart />
      </div>
      <div className={styles.view}>
        <h3> Applications</h3>
        <Link to={"/layout/application"}>View All</Link>
      </div>

      <div className={styles.applic}>
        {/* <Table /> */}
        <Trail />
      </div>
    </div>
  );
};

export default Left;
