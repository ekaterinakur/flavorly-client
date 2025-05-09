import PropTypes from 'prop-types';
import { useState } from 'react';
import Icon from '../../Icon/Icon';
import FieldError from '../FieldError/FieldError';

import './InputPassword.scss';

const InputPassword = ({ placeholder, error, register, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePassword = () => setIsVisible((prev) => !prev);

  return (
    <div className={`input-wrapper ${error ? 'input-error' : ''} ${className}`}>
      <input
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        {...register}
      />
      <button
        type="button"
        className="toggle-password-btn"
        onClick={togglePassword}
        aria-label="Toggle password visibility"
      >
        {isVisible ? (
          <Icon name="eye" size="20px" />
        ) : (
          <Icon name="eye-closed" size="20px" />
        )}
      </button>
      {error && <FieldError message={error} />}
    </div>
  );
};

InputPassword.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default InputPassword;
