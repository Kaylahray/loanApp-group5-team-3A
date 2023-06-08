import styles from "./Dashboard.module.scss";

// eslint-disable-next-line react/prop-types
const Pagination = ({ postPerPage, totalPost, paginate}) => {
  const pageNum = [];
  for (let index = 1; index <= Math.ceil(totalPost / postPerPage); index++) {
    pageNum.push(index);
  }
  return (
    <ul className={styles.pagination}>
      {pageNum.map((number) => (
        // <li key={number} className={styles.pag_list}>
        <li key={number} onClick={() => paginate(number)}>
          <a href="#0" className={styles.pagBtn}>
            {number}
          </a>
        </li>
        // </li>
      ))}
    </ul>
  );
};

export default Pagination;
