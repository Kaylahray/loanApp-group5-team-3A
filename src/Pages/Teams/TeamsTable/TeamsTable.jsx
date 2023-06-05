/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import styles from "./TeamsTable.module.scss";
import teamsdata from "../TeamsData/TeamsData";


const TeamsTable = () => {
    return (
<div className={styles.table}>
    <table>
                <thead>
                  <tr className={styles.dataheader}>
                    <th>No</th>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Last Seen</th>
                  </tr>
                </thead>
                <tbody>
                {teamsdata.map((data) => {
                    return (
                      <tr key={data.no} className='teambody'>
                            <td>{data.no}</td>
                            <td>{data.userID}</td>
                            <td>{data.name}</td>
                            <td className={styles.teamrole}>{data.role}</td>
                            <td>{data.lastSeen}</td>
                          </tr>
                    )
                          })}
                        </tbody>
                
            </table>
    </div>
    )
            }

export default TeamsTable;
        
    