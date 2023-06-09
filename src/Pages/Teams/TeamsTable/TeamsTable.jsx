/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import styles from './TeamsTable.module.scss';
import teamsdata from '../TeamsData/TeamsData';

const TeamsTable = ({ value }) => {
  const filteredData = teamsdata.filter((data) =>
    data.name.toLowerCase().includes(value.toLowerCase())
  );

  const tableData = value ? filteredData : teamsdata;

  return (
    <div>
      <table className={styles.teamtable}>
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
                      data.role === 'Admin'
                        ? '#F5F5FF'
                        : data.role === 'Analyst'
                        ? '#F6F6F6'
                        : '#F6F6F6',
                    color:
                      data.role === 'Admin'
                        ? '#4C4DDC'
                        : data.role === 'Analyst'
                        ? '#4CDC93'
                        : '#CB3A31',
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

export default TeamsTable;
