import './AuthButtons.scss'
import Button from '../Button/Button.jsx';

const AuthButtons = () => {
  return (
    <div className="header-login">
      <ul className="header-login-list">
        <li className="header-login-item">
          <Button classname="sign-in">SIGN IN</Button>
        </li>
        <li className="header-login-item">
          <Button classname="sign-out">SIGN OUT</Button>
        </li>
      </ul>
    </div>
  );
};

export default AuthButtons;