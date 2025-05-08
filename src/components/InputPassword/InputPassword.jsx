import PropTypes from 'prop-types';
import { useState } from 'react';
import './InputPassword.scss';

const InputPassword = ({ placeholder, error, register, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePassword = () => setIsVisible(prev => !prev);

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
        <svg width="20" height="20" fill="currentColor">
          <use href={`/icons.svg#${isVisible ? 'icon-eye' : 'icon-eye-closed'}`} />
        </svg>
      </button>
      {error && <span className="error">{error}</span>}
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
