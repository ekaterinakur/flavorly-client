import './UserInfo.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';

const UserInfo = ({ handleClick, user, open, isHomePage }) => {
  return (
    <div className="user-info">
      <Button onClick={handleClick}>
        <img className="user-avatar" src={user.avatar} alt="user-image"></img>
        <span className="user-name">{user.name.toUpperCase()}</span>
        <Icon
          className={`chevron-icon ${open ? 'open' : ''}`}
          name="chevron-up"
          size={18}
          color="#ffffff"
        />
      </Button>

      {open && (
        <ul className="user-menu">
          <li className="user-menu-item">
            <Link className="user-menu-link" to="/profile">
              Profile
            </Link>
          </li>

          <li className="user-menu-item">
            <Link className="user-menu-link" to="/logout">
              Log out
            </Link>
            <Icon
              name="arrow-up-right"
              size={18}
              color={isHomePage ? '#ffffff' : '#050505'}
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserInfo;
