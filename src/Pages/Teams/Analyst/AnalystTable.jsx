/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */

import analystdata from "./AnalystData";
import styles from "./AnalystTable.module.scss";



const AnalystTable = ({ value }) => {
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
                        
                        {value? analystdata.filter((data) => data.name.includes(value))
            .map((data) => (
                  <tr key={data.id} className={styles.teamsbody}>
                    <td>{data.no}</td>
                            <td>{data.userID}</td>
                            <td>{data.name}</td>
                            <td> <div className={styles.role} style={{backgroundColor: data.role === "Admin" ? "#deece5" : data.role === "Analyst" ? "#4CDC93" : "#4CDC93" , color: data.role === "Admin" ? "#20573D" : data.role === "Analyst" ? "#4CDC93" : "#4CDC93"}}>{data.role}</div></td>
                            <td>{data.lastSeen}</td>
                  </tr>
                ))
         
            : analystdata.map((data) => (
                  <tr key={data.id} className={styles.teambody}>
                    <td>{data.no}</td>
                            <td>{data.userID}</td>
                            <td>{data.name}</td>
                            <td> <div className={styles.role} style={{backgroundColor: data.role === "Admin" ? "#deece5" : data.role === "Analyst" ? "#F6F6F6" : "#4CDC93" , color: data.role === "Admin" ? "#20573D" : data.role === "Analyst" ? "#4CDC93" : "#4CDC93"}}>{data.role}</div></td>
                            <td>{data.lastSeen}</td>
                  </tr>
              ))}
              </tbody>
            </table>
    </div>
    );
            };

export default AnalystTable;
        
    