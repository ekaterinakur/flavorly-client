import './AuthButtons.scss';
import Button from '../Button/Button.jsx';

const AuthButtons = ({ onSignUpClick }) => {
  return (
    <div className="header-login">
      <ul className="header-login-list">
        <li className="header-login-item">
          <Button className="sign-in">Sign In</Button>
        </li>
        <li className="header-login-item">
          <Button className="sign-up" onClick={onSignUpClick}>
            SIGN UP
          </Button>

        </li>
      </ul>
    </div>
  );
};

export default AuthButtons;
