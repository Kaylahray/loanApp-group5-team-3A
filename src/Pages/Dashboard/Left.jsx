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
        <a href="/">View All</a>
      </div>

      <div className={styles.applic}>
        <div className={styles.slide}>
          <div className={styles.one}>
            <a href="/" className={styles.notif}>
              All(200)
            </a>
          </div>
          <div className={styles.two}>
            <a href="#0" className={styles.notif} onClick={assigned}>
              Assigned(118)
            </a>
          </div>
          <div className={styles.three}>
            <a href="/" className={styles.notif}>
              Unassigned(108)
            </a>
          </div>
          <div className={styles.four}>
            <a href="/" className={styles.notif}>
              Closed(72)
            </a>
          </div>
        </div>
        {/* <Table /> */}
        <Trail />
      </div>
    </div>
  );
};

export default Left;
