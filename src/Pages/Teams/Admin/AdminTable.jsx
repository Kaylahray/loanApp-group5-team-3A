/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import admindata from "./AdminData";
import { useState } from "react";


function AdminTable () {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = admindata.slice(firstIndex, lastIndex);
  const npage = Math.ceil(admindata.length / recordsPerPage);
  const numbers=[...Array(npage + 1).keys()].slice(1)

  function prePage() {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  } 
  function changeCPage (id) {
    setCurrentPage(id)
  }
  function nextPage () {
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }
  
  return (
    <div>
      <table className="teamtable">
        <thead className="teamdataheader">
          <tr>
            <th>No</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        
        <tbody>
            {records.map((d,i) => (
            <tr key={i} className="teamsbody">
              <td>{d.no}</td>
              <td>{d.userID}</td>
              <td>{d.name}</td>
              <td>
                <div
                  className="role"
                  style={{
                    backgroundColor: d.role === "Admin" ? "#F5F5FF" : "#4CDC93",
                    color: d.role === "Admin" ? "#4C4DDC" : "#4CDC93",
                  }}
                >
                  {d.role}
                </div>
              </td>
              <td>{d.lastSeen}</td>
            </tr>
          ))
                }
    
          
        </tbody>
      </table>
      
      <nav>
<ul className="team-pagination">
  <li className="team-pagination-item">
    <a href="#" className="team-pagination-link" onClick={prePage}>
      Previous
    </a>
  </li>
  {numbers.map((n, i) => (
    <li
      className={`team-pagination-item ${currentPage === n ? 'active' : ''}`}
      key={i}
    >
      <a
        href="#"
        className="team-pagination-link"
        onClick={() => changeCPage(n)}
      >
        {n}
      </a>
    </li>
  ))}
  <li className="team-pagination-item">
    <a href="#" className="team-pagination-link" onClick={nextPage}>
      Next
    </a>
  </li>
</ul>
</nav>

    </div>
  );
};


export default AdminTable;
