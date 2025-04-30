import classNames from 'classnames';
import styles from './Subtitle.module.scss';
import PropTypes from 'prop-types';

export function Subtitle({ className, children }) {
  return <p className={classNames(styles.subtitle, className)}>{children}</p>;
}

Subtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
