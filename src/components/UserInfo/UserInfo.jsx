import './UserInfo.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import training_img from '../../assets/vika_must_be_deleted.png';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../api/logout.js';

const UserInfo = ({ handleClick, user, open, isHomePage }) => {
  const dispath = useDispatch();

  const handleLogout = () => {
    dispath(logoutUser());
  };

  return (
    <div className="user-info">
      <Button onClick={handleClick}>
        <img
          className="user-avatar"
          src={user.avatar || training_img}
          alt="user-image"
        ></img>
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
            <Link className="user-menu-link" to="/" onClick={handleLogout}>
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
