import './UserInfo.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


const UserInfo = ({ handleClick, user, open }) => {
  return (
    <div className="user-info">
      <Button onClick={handleClick}>
        <img className="user-avatar" src={user.avatar} alt="user-image"></img>
        <span className="user-name">{user.name.toUpperCase()}</span>
        <svg
          className={`chevron-icon ${open ? 'open' : ''}`}
          width={18}
          height={18}
        >
          <use href="/src/assets/sprite.svg#icon-chevron" />
        </svg>
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
            <svg width={18} height={18}>
              <use href="/src/assets/sprite.svg#icon-arrow-up-right" />
            </svg>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserInfo;