import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  type = 'button',
  variant,
  size,
  disabled,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className || ''}`}
      type={`${type}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Example usage: <Button variant="outline" size="large"> / <Button size="small" disabled>

Button.propTypes = {
  variant: PropTypes.oneOf([
    'grey',
    'white-border',
    'outline',
    'filled',
    'text',
  ]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['small', 'medium', 'add-recipe', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  size: 'small',
  disabled: false,
  onClick: () => {},
};

export default Button;
