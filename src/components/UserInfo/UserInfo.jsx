import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

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
import { clientLogout } from '../../redux/slices/authSlice.js';

const UserInfo = ({ user, isHomePage }) => {
  const isLogoutOpen = useSelector(selectIsLogoutOpen);

  const dispatch = useDispatch();

  const handleLogoutOpen = () => {
    dispatch(openLogoutModal());
  };

  const handleLogoutClose = () => {
    dispatch(closeLogoutModal());
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    dispatch(clientLogout());
    dispatch(closeLogoutModal());
  };

  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const userMenuRef = useRef(null);

  const handleUserModalClick = () => setIsOpenUserModal(!isOpenUserModal);

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setIsOpenUserModal(false);
    }
  };

  useEffect(() => {
    if (isOpenUserModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenUserModal]);

  return (
    <div className="user-info" ref={userMenuRef}>
      <Button onClick={handleUserModalClick} className="user-info-btn">
        <div className="user-avatar-wrapper">
          {user.avatar ? (
            <img src={user.avatar || training_img} className="user-avatar" alt="user-image"></img>
          ) : (
            user.name?.[0]
          )}
        </div>
        <span className="user-name">{user.name.toUpperCase()}</span>
        <Icon
          className={`chevron-icon ${isOpenUserModal ? 'open' : ''}`}
          name="chevron-up"
          size={18}
          color="#ffffff"
        />
      </Button>

      {isOpenUserModal && (
        <ul className="user-menu">
          <li className="user-menu-item">
            <Link
              className="user-menu-link"
              to="/profile"
              onClick={handleUserModalClick}
            >
              Profile
            </Link>
          </li>

          <li className="user-menu-item">
            <Link
              className="user-menu-link"
              onClick={() => {
                handleLogoutOpen();
                handleUserModalClick();
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
