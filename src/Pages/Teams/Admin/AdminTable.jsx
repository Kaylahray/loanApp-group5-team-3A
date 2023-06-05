import admindata from "./AdminData";
import styles from "./AdminTable.module.scss";

/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
const AdminTable = () => {
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
                {admindata.map((data) => {
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

export default AdminTable;
        
    