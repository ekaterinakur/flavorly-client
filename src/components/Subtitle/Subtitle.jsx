import classNames from 'classnames';
import styles from './Subtitle.module.scss';
import PropTypes from 'prop-types';

export function Subtitle({ className, isMuted, children }) {
  return (
    <p
      className={classNames(styles.subtitle, className, {
        [styles.muted]: isMuted,
      })}
    >
      {children}
    </p>
  );
}

Subtitle.propTypes = {
  className: PropTypes.string,
  isMuted: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
