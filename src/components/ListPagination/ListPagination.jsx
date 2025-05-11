import classNames from 'classnames';
import styles from './ListPagination.module.scss';
import { getPaginateStructure } from './ListPaginationUtils';

export function ListPagination({ currentPage, totalPages, onPageChange }) {
  // console.log('ListPagination render', { currentPage, totalPages });
  if (totalPages === 1) return null;

  const handlePageChange = (newPage) => {
    if (newPage !== currentPage) {
      onPageChange(newPage);
    }
  };

  const buttons = (() => {
    const pagesStructure = getPaginateStructure(totalPages, currentPage);
    return pagesStructure.map((page, index) => {
      const isActive = currentPage === page;

      if (page === 'ellipsis') return <span key={index}>...</span>;

      return (
        <button
          key={index}
          className={classNames(styles.button, {
            [styles.active]: isActive,
          })}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      );
    });
  })();

  return <nav className={styles.wrapper}>{buttons}</nav>;
}
