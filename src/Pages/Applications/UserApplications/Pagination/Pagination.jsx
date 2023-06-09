/*eslint-disable react/prop-types*/
//import React from 'react';
import styles from './Pagination.module.scss';
//import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


// eslint-disable-next-line react/prop-types
const Pagination = ({ postPerPage, totalPost, paginate}) => {
  const pageNum = [];
  for (let index = 1; index <= Math.ceil(totalPost / postPerPage); index++) {
    pageNum.push(index);
  }
  return (
    <ul className={styles.pag}>
      {pageNum.map((number) => (
        // <li key={number} className={styles.pag_list}>
        <li key={number} onClick={() => paginate(number)}>
          <a href="#0" className={styles.pagB}>
            {number}
          </a>
        </li>
        // </li>
      ))}
    </ul>
  );
};

export default Pagination;

{/*const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const range = [];
  const showFirstEllipsis = currentPage > 4;
  const showLastEllipsis = currentPage < totalPages - 3;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2) ||
      (showFirstEllipsis && i === 2) ||
      (showLastEllipsis && i === totalPages - 12)
    ) {
      range.push(i);
    }
  }

  if (showFirstEllipsis && currentPage >= 6) {
    range.splice(2, 0, '...');
  }

  if (showLastEllipsis && currentPage <= totalPages - 5) {
    range.splice(-2, 0, '...');
  }

  return (
    <div className={styles.pag}>
      <div
        className={styles.pagB}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <MdKeyboardArrowLeft />
        Previous
      </div>

      {range.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <p className={styles.pagE}>{page}</p>
          ) : (
            <p
              className={`${styles.pagP} ${page === currentPage ? styles.active : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </p>
          )}
        </React.Fragment>
      ))}

      <div
        className={styles.pagB}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
}; */}
