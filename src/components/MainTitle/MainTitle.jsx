import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainTitle.module.scss';

function MainTitle({ title, subtitle }) {
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

export default MainTitle;
