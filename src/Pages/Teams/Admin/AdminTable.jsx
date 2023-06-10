/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import admindata from "./AdminData";
import styles from "./AdminTable.module.scss";

const AdminTable = ({ value }) => {
  const filteredData = admindata.filter((data) =>
    data.name.toLowerCase().includes(value.toLowerCase())
  );

  const tableData = value ? filteredData : admindata;

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
            <tr key={index} className={styles.teambody}>
              <td>{data.no}</td>
              <td>{data.userID}</td>
              <td>{data.name}</td>
              <td>
                <div
                  className={styles.role}
                  style={{
                    backgroundColor: data.role === "Admin" ? "#F5F5FF" : "#4CDC93",
                    color: data.role === "Admin" ? "#4C4DDC" : "#4CDC93",
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

export default AdminTable;
