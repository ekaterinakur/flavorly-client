import classNames from 'classnames';
import styles from './ListPagination.module.scss';

export function ListPagination({ page, totalPages, onPageChange }) {
  const handlePageChange = (newPage) => {
    if (newPage !== page) {
      onPageChange(newPage);
    }
  };

  return (
    <ul className={styles.wrapper}>
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index}>
          <button
            className={classNames(styles.button, {
              [styles.active]: index + 1 === page,
            })}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
}
