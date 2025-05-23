import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
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
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import {
  selectIsLoggedIn,
  selectUser,
} from '../../redux/selectors/authSelectors.js';
import {
  selectIsAcceptionOpen,
  selectIsSignInOpen,
  selectIsSignUpOpen,
} from '../../redux/selectors/modalSelectors.js';
import {
  openSignInModal,
  closeSignInModal,
  openSignUpModal,
  closeSignUpModal,
  closeAcceptionModal,
  openAcceptionModal,
} from '../../redux/slices/modalSlice.js';
import AcceptionModal from '../AcceptionModal/AcceptionModal.jsx';

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isSignUpOpen = useSelector(selectIsSignUpOpen);
  const isSignInOpen = useSelector(selectIsSignInOpen);
  const isAcceptionOpen = useSelector(selectIsAcceptionOpen);

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const [activeTab, setActiveTab] = useState('signup');

  const handleOpenSignUp = () => {
    setActiveTab('signup');
    dispatch(openSignUpModal());
    dispatch(closeSignInModal());
  };

  const handleOpenSignIn = () => {
    setActiveTab('signin');
    dispatch(openSignInModal());
    dispatch(closeSignUpModal());
    dispatch(closeAcceptionModal());
  };

  const handleAcceptionOpen = () => {
    dispatch(closeSignUpModal());
    dispatch(openAcceptionModal());
  };

  const handleClose = () => {
    dispatch(closeSignUpModal());
    dispatch(closeSignInModal());
    dispatch(closeAcceptionModal());
  };

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleMobileMenuClick = () => {
    setOpenMobileMenu(!openMobileMenu);
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
              <NavBar isDark={isHomePage} />
              <div className="user-wrapper">
                <UserInfo user={user} isHomePage={isHomePage} />
                <Button
                  className="burger-menu-btn"
                  onClick={handleMobileMenuClick}
                >
                  <Icon
                    className="burger-menu-icon"
                    name="burger"
                    size={28}
                    color={isHomePage ? '#ffffff' : '#050505'}
                  />
                </Button>
              </div>
              {openMobileMenu && <MobileMenu onClose={handleMobileMenuClick} />}
            </>
          ) : (
            <AuthButtons
              onSignUpClick={handleOpenSignUp}
              onSignInClick={handleOpenSignIn}
              active={activeTab}
            />
          )}
        </div>
      </div>

      <Modal isOpen={isSignUpOpen} onClose={handleClose}>
        <SignUpModal
          onSuccess={handleAcceptionOpen}
          onSwitch={handleOpenSignIn}
        />
      </Modal>

      <Modal isOpen={isSignInOpen} onClose={handleClose}>
        <SignInModal onSuccess={handleClose} onSwitch={handleOpenSignUp} />
      </Modal>

      <Modal isOpen={isAcceptionOpen} onClose={handleClose}>
        <AcceptionModal onSignIn={handleOpenSignIn} onClose={handleClose} />
      </Modal>
    </header>
  );
};

export default Header;
