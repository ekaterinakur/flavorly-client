import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ variant, size, disabled, onClick, children }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Example usage: <Button variant="outline" size="large"> / <Button size="small" disabled>

Button.propTypes = {
  variant: PropTypes.oneOf(['outline']),
  size: PropTypes.oneOf(['small', 'publish', 'add-recipe', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  size: 'small',
  disabled: false,
  onClick: () => {},
};

export default Button;
