import DashData from "./DashData";
import styles from "./Dashboard.module.scss";
import { useState } from "react";
import Pagination from "./Pagination";

const Trail = () => {
  const [currentPages, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [filter, setFilter] = useState("");
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const indexOfLast = postPerPage * currentPages;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPost = DashData.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const page = Math.ceil(DashData.length / postPerPage);

  return (
    <div>
      <div className={styles.slide}>
        <button
          className={
            toggleState === 1 ? `${styles.active_tab}` : `${styles.tab}`
          }
          onClick={() => {
            setFilter("");
            toggleTab(1);
          }}
        >
          All(200)
        </button>
        <button
          className={
            toggleState === 2 ? `${styles.active_tab}` : `${styles.tab}`
          }
          onClick={() => {
            setFilter("Approved");
            toggleTab(2);
          }}
        >
          Assigned(118)
        </button>

        <button
          className={
            toggleState === 3 ? `${styles.active_tab}` : `${styles.tab}`
          }
          onClick={() => {
            setFilter("Pending");
            toggleTab(3);
          }}
        >
          Unassigned(108)
        </button>

        <button
          className={
            toggleState === 4 ? `${styles.active_tab}` : `${styles.tab}`
          }
          onClick={() => {
            setFilter("Disapproved");
            toggleTab(4);
          }}
        >
          Closed(72)
        </button>
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
            {currentPost
              .filter((data) => filter === "" || data.status === filter)
              .map((data) => {
                return (
                  <tr key={data.id} className={styles.app_body}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.analyst}</td>
                    <td>
                      <p
                        className={styles.status}
                        style={{
                          backgroundColor:
                            data.status === "Approved"
                              ? "#f2f9f5"
                              : data.status === "Pending"
                              ? " #ffebd8"
                              : "#ffe4e2",
                          color:
                            data.status === "Approved"
                              ? "#20573D"
                              : data.status === "Pending"
                              ? "#734011"
                              : "#CB3A31",
                          padding: "0.5rem",
                          borderRadius: "1rem",
                        }}
                      >
                        {data.status}
                      </p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className={styles.paginationDiv}>
          <button
            onClick={() => setCurrentPage((curr) => curr - 1)}
            className={styles.disabled}
            disabled={currentPages === 1 ? true : false}
          >
            previous
          </button>

          <Pagination
            totalPost={DashData.length}
            postPerPage={postPerPage}
            paginate={paginate}
          />
          <button
            className={styles.disabled}
            onClick={() => setCurrentPage((curr) => curr + 1)}
            disabled={currentPages === page ? true : false}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trail;
