/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import analystdata from "./AnalystData";
import styles from "./AnalystTable.module.scss";

const AnalystTable = ({ value }) => {
  const filteredData = analystdata.filter((data) =>
    data.name.toLowerCase().includes(value.toLowerCase())
  );

  const tableData = value ? filteredData : analystdata;

  return (
    <div className={styles.teamtable}>
      <table>
        <thead>
          <tr className={styles.teamdataheader}>
            <th>No</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className={styles.teamsbody}>
              <td>{data.no}</td>
              <td>{data.userID}</td>
              <td>{data.name}</td>
              <td>
                <div
                  className={styles.role}
                  style={{
                    backgroundColor:
                      data.role === "Analyst" ? "#F6F6F6" : "#4CDC93",
                    color: data.role === "Analyst" ? "#4CDC93" : "#F6F6F6",
                  }}
                >
                  {data.role}
                </div>
              </td>
              <td>{data.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalystTable;
