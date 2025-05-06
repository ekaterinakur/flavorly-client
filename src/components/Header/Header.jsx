import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Header.scss';
import Modal from '../Modal/Modal';
import SignUpModal from '../SignUpModal/SignUpModal';
import SignInModal from '../SignInModal/SignInModal';
import AuthButtons from '../AuthButtons/AuthButtons.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Button from '../Button/Button.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Icon from '../Icon/Icon.jsx';
import {
  selectIsLoggedIn,
  selectUser,
} from '../../redux/selectors/authSelectors.js';
import {
  selectIsSignInOpen,
  selectIsSignUpOpen,
} from '../../redux/selectors/modalSelectors.js';
import {
  openSignInModal,
  closeSignInModal,
  openSignUpModal,
  closeSignUpModal,
} from '../../redux/slices/modalSlice.js';

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isSignUpOpen = useSelector(selectIsSignUpOpen);
  const isSignInOpen = useSelector(selectIsSignInOpen);

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const [open, setOpen] = useState(false);
  const userMenuRef = useRef(null);

  const handleClick = () => setOpen(!open);

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleOpenSignUp = () => {
    dispatch(openSignUpModal());
    dispatch(closeSignInModal());
  };

  const handleOpenSignIn = () => {
    dispatch(openSignInModal());
    dispatch(closeSignUpModal());
  };

  const handleClose = () => {
    dispatch(closeSignUpModal());
    dispatch(closeSignInModal());
  };

  return (
    <header className="header">
      <div className="container">
        <div
          className={`header-wrapper ${!isHomePage ? 'header--transparent' : ''}`}
        >
          <Link to="/" className="logo">
            foodies
          </Link>

          {isLoggedIn ? (
            <>
              <NavBar />
              <div className="user-wrapper" ref={userMenuRef}>
                <UserInfo
                  user={user}
                  handleClick={handleClick}
                  open={open}
                  isHomePage={isHomePage}
                />
                <Button className="burger-menu-btn" onClick={() => {}}>
                  <Icon
                    className="burger-menu-icon"
                    name="burger"
                    size={28}
                    color={isHomePage ? '#ffffff' : '#050505'}
                  />
                </Button>
              </div>
            </>
          ) : (
            <AuthButtons
              onSignUpClick={handleOpenSignUp}
              onSignInClick={handleOpenSignIn}
              active={isSignUpOpen ? 'signup' : isSignInOpen ? 'signin' : ''}
            />
          )}
        </div>
      </div>

      <Modal isOpen={isSignUpOpen} onClose={handleClose}>
        <SignUpModal onSuccess={handleClose} onSwitch={handleOpenSignIn} />
      </Modal>

      <Modal isOpen={isSignInOpen} onClose={handleClose}>
        <SignInModal onSuccess={handleClose} onSwitch={handleOpenSignUp} />
      </Modal>
    </header>
  );
};

export default Header;
