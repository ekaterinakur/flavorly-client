import PropTypes from 'prop-types';
import { useState } from 'react';
import './Input.scss';

const InputPassword = ({ placeholder, error, register, className = '' }) => {
  const [visible, setVisible] = useState(false);

  const inputId = `input-${placeholder?.toLowerCase().replace(/\W/g, '-')}`;

  const showPassword = () => {
    const input = document.getElementById(inputId);
    if (input) input.type = 'text';
  };

  const hidePassword = () => {
    const input = document.getElementById(inputId);
    if (input) input.type = 'password';
  };

  return (
    <div className={`input-wrapper ${error ? 'input-error' : ''} ${className}`}>
      <input
        id={inputId}
        type="password"
        placeholder={placeholder}
        {...register}
      />

      <button
        type="button"
        className="toggle-password-btn"
        onMouseDown={showPassword}
        onMouseUp={hidePassword}
        onMouseLeave={hidePassword}
        aria-label="Show password"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 33 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.982.315A1.44 1.44 0 0 1 2.909.216l.109.099L32.45 29.758a1.44 1.44 0 0 1-2.026 2.026l-.109-.099-5.897-5.897a14.86 14.86 0 0 1-7.134 2.297l-.594.022h-.023c-5.242 0-9.263-2.993-11.884-5.789a27.692 27.692 0 0 1-3.79-5.154 20.517 20.517 0 0 1-.203-.371l-.055-.104a.594.594 0 0 1-.014-.03l-.005-.009-.001-.004-.001-.001a1.44 1.44 0 0 1 .02-1.326 26.035 26.035 0 0 1 5.871-7.346L.984 2.352l-.099-.109A1.44 1.44 0 0 1 .984.316zm7.661 9.698a23.147 23.147 0 0 0-4.995 5.99 24.085 24.085 0 0 0 3.235 4.347c2.376 2.534 5.682 4.87 9.766 4.876a11.996 11.996 0 0 0 5.669-1.536l-2.937-2.938a5.542 5.542 0 0 1-.6.318 5.449 5.449 0 0 1-4.252.075 5.452 5.452 0 0 1-3.007-3.008 5.43 5.43 0 0 1 .39-4.854l-3.271-3.271zm8.026-6.118c5.241.001 9.261 2.993 11.881 5.788a27.692 27.692 0 0 1 3.79 5.154c.088.157.156.283.203.371l.055.104a.594.594 0 0 1 .014.03l.005.009.001.004.001.001.069.16c.136.38.105.802-.087 1.163a26.18 26.18 0 0 1-3.048 4.503 1.44 1.44 0 0 1-2.204-1.854 23.19 23.19 0 0 0 2.333-3.329 24.085 24.085 0 0 0-3.235-4.347c-2.379-2.537-5.691-4.878-9.783-4.878h-.004a10.707 10.707 0 0 0-1.858.158l-.609.125a1.44 1.44 0 0 1-.656-2.804l.385-.085a13.571 13.571 0 0 1 2.742-.272h.001l.003-.001-.001.001zM14.09 15.46a2.556 2.556 0 0 0 3.117 3.117l-3.116-3.116z" />
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
