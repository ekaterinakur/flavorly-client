import classNames from 'classnames';
import styles from './MainTitle.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

export function MainTitle({ tag: Tag = 'h1', className, children }) {
  return (
    <>
      {React.createElement(
        Tag,
        { className: classNames(styles.title, className) },
        children
      )}
    </>
  );
}

MainTitle.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
