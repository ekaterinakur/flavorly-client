import classNames from 'classnames';
import styles from './IconButton.module.scss';
import PropTypes from 'prop-types';

export function IconButton({ onClick, isActive, className, children }) {
  return (
    <button
      type="button"
      className={classNames(styles.button, className, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
