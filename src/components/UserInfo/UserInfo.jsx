import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './UserInfo.scss';
import Button from '../Button/Button';
import Icon from '../Icon/Icon.jsx';
import training_img from '../../assets/vika_must_be_deleted.png';
import { logoutUser } from '../../api/logout.js';
import { selectIsLogoutOpen } from '../../redux/selectors/modalSelectors.js';
import LogoutModal from '../LogoutModal/LogoutModal.jsx';
import Modal from '../Modal/Modal.jsx';
import {
  openLogoutModal,
  closeLogoutModal,
} from '../../redux/slices/modalSlice.js';

const UserInfo = ({ handleClick, user, open, isHomePage }) => {
  const isLogoutOpen = useSelector(selectIsLogoutOpen);

  const dispath = useDispatch();

  const handleLogoutOpen = () => {
    dispath(openLogoutModal());
  };

  const handleLogoutClose = () => {
    dispath(closeLogoutModal());
  };

  const handleLogout = () => {
    dispath(logoutUser());
    dispath(closeLogoutModal());
  };

  return (
    <div className="user-info">
      <Button onClick={handleClick} className='user-info-btn'>
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
            <Link
              className="user-menu-link"
              to="/profile"
              onClick={handleClick}
            >
              Profile
            </Link>
          </li>

          <li className="user-menu-item">
            <Link
              className="user-menu-link"
              to="/"
              onClick={() => {
                handleLogoutOpen();
                handleClick();
              }}
            >
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

      <Modal isOpen={isLogoutOpen} onClose={handleLogoutClose}>
        <LogoutModal
          handleLogoutCLose={handleLogoutClose}
          onLogout={handleLogout}
        ></LogoutModal>
      </Modal>
    </div>
  );
};

export default UserInfo;
