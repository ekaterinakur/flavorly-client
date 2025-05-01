import classNames from 'classnames';
import styles from './MainTitle.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

export function MainTitle({ className, children }) {
  return <h1 className={classNames(styles.title, className)}>{children}</h1>;
}

MainTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
