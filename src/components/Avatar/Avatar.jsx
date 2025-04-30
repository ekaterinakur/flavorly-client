import classNames from 'classnames';
import styles from './Avatar.module.scss';
import PropTypes from 'prop-types';
import avatar from '../../assets/avatar.svg';

export function Avatar({ src, alt = 'user photo', size = 50, className }) {
  const handleError = (e) => {
    e.target.src = avatar;
  };

  return (
    <img
      src={src || avatar}
      width={size}
      height={size}
      alt={alt}
      className={classNames(styles.avatar, className)}
      style={{ width: size, height: size }}
      onError={handleError}
      loading="lazy"
      role="img"
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string,
};
