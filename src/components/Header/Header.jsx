import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import './Header.scss';
import training_img from '../../assets/vika_must_be_deleted.png';
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

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
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
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  const handleOpenSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const handleSwitch = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };

  const handleClose = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className={`header-wrapper ${!isHomePage ? 'header--transparent' : ''}`}>
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

      {isSignUpOpen && (
        <Modal isOpen={isSignUpOpen} onClose={handleClose}>
          <SignUpModal onSuccess={handleClose} onSwitch={handleSwitch} />
        </Modal>
      )}

      {isSignInOpen && (
        <Modal isOpen={isSignInOpen} onClose={handleClose}>
          <SignInModal onSuccess={handleClose} onSwitch={handleOpenSignUp} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
