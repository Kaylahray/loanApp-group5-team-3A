/*eslint-disable react/prop-types*/
import styles from "./ApplicationTable.module.scss";
import ApplicationData from "../ApplicationData";
import Pagination from '../Pagination/Pagination';
import { useState } from "react";



const ApplicationTable = ({ value }) => {
  const [currentPages, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  const indexOfLast = postPerPage * currentPages;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPost = ApplicationData.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const page = Math.ceil(ApplicationData.length / postPerPage);

  return (
    <div>
      <table className={styles.appT}>
        <thead>
          <tr className={styles.appH}>
            <th>No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Analyst</th>
            <th>Status</th>
            <th className={styles.tableA}>Action</th>
          </tr>
        </thead>

        <tbody>
                {value? currentPost.filter((data) => data.name.includes(value))
            .map((data) => (
                  <tr key={data.id} className={styles.appB}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.analyst}</td>
                    <td><div className={styles.status} style={{backgroundColor: data.status === "Approved" ? "#f2f9f5" : data.status === "Pending" ? " #ffebd8" : "#ffe4e2" , color: data.status === "Approved" ? "#20573D" : data.status === "Pending" ? "#734011" : "#CB3A31"}}>{data.status}</div></td> 
                    <td className={styles.tableA}>{data.action}</td>
                  </tr>
                ))

         
            : currentPost.map((data) => (
                  <tr key={data.id} className={styles.appB}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.analyst}</td>
                    <td><div className={styles.status} style={{backgroundColor: data.status === "Approved" ? "#f2f9f5" : data.status === "Pending" ? " #ffebd8" : "#ffe4e2" , color: data.status === "Approved" ? "#20573D" : data.status === "Pending" ? "#734011" : "#CB3A31"}}>{data.status}</div></td>
                    <td className={styles.tableA}>{data.action}</td>
                  </tr>
              ))}
        </tbody>
      </table>

      <div className={styles.pagD}>
        <button
          onClick={() => setCurrentPage((curr) => curr - 1)}
          className={styles.disabled}
          disabled={currentPages === 1 ? true : false}
        >
          previous
        </button>

        <Pagination
          totalPost={ApplicationData.length}
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
  );
};

export default ApplicationTable;
