import './AuthButtons.scss';
import Button from '../Button/Button.jsx';
import PropTypes from 'prop-types';

const AuthButtons = ({ onSignUpClick, onSignInClick, active }) => {
  return (
    <div className="header-login">
      <div className="toggle-wrapper">
        <button
          className={`toggle-btn ${active === 'signin' ? 'active' : ''}`}
          onClick={onSignInClick}
        >
          SIGN IN
        </button>
        <button
          className={`toggle-btn ${active === 'signup' ? 'active' : ''}`}
          onClick={onSignUpClick}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

AuthButtons.propTypes = {
  onSignUpClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  active: PropTypes.string,
};

export default AuthButtons;
