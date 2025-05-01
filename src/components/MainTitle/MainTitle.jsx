import styles from './MainTitle.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

export function MainTitle({ title, subtitle }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </>
  );
}

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
