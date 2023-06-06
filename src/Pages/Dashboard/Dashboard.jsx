import Top from "../../Component/LayoutComponent/TopSectionComponent/Top";
import search from "./DashboardIcons/searchIcon.svg";
import styles from "./Dashboard.module.scss";
import DashData from "./DashData";

import ProfileData from "./Notification";
// import DashChart from "./DashChart";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [items, setItems] = useState(DashData);
  const [query, setQuery] = useState("");
  const filteredItems = items.filter((item) => {
    // item.toLowercase().includes(query.toLowerCase());
  });
  return (
    <div className={styles.body}>
      <Top>
        <div className={styles.dashnav}>
          <div className={styles.dashleft}>
            <h3>Hi Tofunmi</h3>

            <div className={styles.dashinput}>
              <img src={search} alt="img" className={styles.img} />
              <input
                className={styles.mysearch}
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
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
      </Top>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}

      <div className={styles.down}>
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

          <div className={styles.chart}>{/* {<DashChart />} */}</div>
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
                <a href="/" className={styles.notif}>
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
            <div className={styles.fetch}>
              <table className={styles.app_table}>
                <thead>
                  <tr className={styles.app_header}>
                    <th>No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Analyst</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredItems.map((data) => {
                    return (
                      <tr key={data.id} className={styles.app_body}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.date}</td>
                        <td>{data.analyst}</td>
                        <td>{data.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.notify_head}>
            <h1>Notification</h1>
            <a href="/">View All</a>
          </div>

          <div className={styles.notify_nav}>
            <a href="/" className={styles.notifynav_all}>
              All
            </a>
            <a href="/" className={styles.notifynav_un}>
              Unread
            </a>
          </div>
          <div className={styles.comments}>
            <div>
              {ProfileData.map((item) => {
                return (
                  <div key={item.id} className={styles.post}>
                    <div>
                      <img src={item.img} alt="img" />
                    </div>
                    <div>
                      <p>
                        <strong> {item.name} </strong>{" "}
                        <span className="span">{item.text}</span>
                      </p>
                      <h4>{item.time}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
