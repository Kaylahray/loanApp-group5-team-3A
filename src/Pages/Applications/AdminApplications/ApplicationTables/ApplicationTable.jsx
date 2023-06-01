/*eslint-disable react/prop-types*/
import styles from "./ApplicationTable.module.scss";
import ApplicationData from "../ApplicationData";

const ApplicationTable = ({ value }) => {
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
                {value? ApplicationData.filter((data) => data.name.includes(value))
            .map((data) => (
                  <tr key={data.id} className={styles.appB}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.analyst}</td>
                    <td><div className={styles.status} style={{backgroundColor: data.status === "Approved" ? "#deece5" : data.status === "Pending" ? "#f0d5bb" : "#f6c6c2" , color: data.status === "Approved" ? "#20573D" : data.status === "Pending" ? "#734011" : "#CB3A31"}}>{data.status}</div></td> 
                    <td className={styles.tableA}>{data.action}</td>
                  </tr>
                ))

         
            : ApplicationData.map((data) => (
                  <tr key={data.id} className={styles.appB}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.analyst}</td>
                    <td><div className={styles.status} style={{backgroundColor: data.status === "Approved" ? "#deece5" : data.status === "Pending" ? "#f0d5bb" : "#f6c6c2" , color: data.status === "Approved" ? "#20573D" : data.status === "Pending" ? "#734011" : "#CB3A31"}}>{data.status}</div></td>
                    <td className={styles.tableA}>{data.action}</td>
                  </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
