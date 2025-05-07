import styles from './MainTitle.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export function MainTitle({ title, subtitle, breadcrumbs, backUrl }) {
  return (
    <>
      {/* TODO add back button here */}
      {/* {backUrl ? <BackButton backUrl={backUrl} /> : null} */}
      {breadcrumbs ? <BreadCrumbs breadcrumbs={breadcrumbs} /> : null}

      <h1 className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </>
  );
}

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backUrl: PropTypes.string,
  breadcrumbs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
