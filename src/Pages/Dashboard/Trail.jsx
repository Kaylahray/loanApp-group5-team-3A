import DashData from "./DashData";
import styles from "./Dashboard.module.scss";
import { useState } from "react";
import Pagination from "./Pagination";

const Trail = () => {
  const [currentPages, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  // const [search, setSearch] = useState(DashData);

  const indexOfLast = postPerPage * currentPages;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPost = DashData.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const page = Math.ceil(DashData.length / postPerPage);
  console.log(DashData);

  // const onSearchHandler = (e) => {
  //   if (!e.target.value) return setSearch(DashData);

  //   const filteredProducts = DashData.filter((product) => {
  //     return product.title.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   console.log(filteredProducts);
  //   setSearch(filteredProducts);
  // };

  return (
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
          {currentPost.map((data) => {
            return (
              <tr key={data.id} className={styles.app_body}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.date}</td>
                <td>{data.analyst}</td>
                <td>{data.status}</td>
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
  );
};

export default Trail;
