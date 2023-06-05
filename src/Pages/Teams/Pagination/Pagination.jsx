import React from 'react';
import styles from './Pagination.module.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
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
    <div className={styles.pagination}>
      <div
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <MdKeyboardArrowLeft />
        Previous
      </div>

      {range.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <p className={styles.paginationEllipsis}>{page}</p>
          ) : (
            <p
              className={`${styles.paginationPage} ${page === currentPage ? styles.active : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </p>
          )}
        </React.Fragment>
      ))}

      <div
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
