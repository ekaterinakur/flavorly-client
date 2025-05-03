import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.scss';
import training_img from '../../assets/vika_must_be_deleted.png';
import AuthButtons from '../AuthButtons/AuthButtons.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Button from '../Button/Button.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Icon from '../Icon/Icon.jsx';

import Modal from '../Modal/Modal';
import SignUpModal from '../SignUpModal/SignUpModal';

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const [open, setOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const isLoggedIn = true; // temporary
  const user = {
    name: 'Mike Milles',
    avatar: training_img,
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
              <div className="user-wrapper">
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
            <AuthButtons onSignUpClick={() => setIsSignUpOpen(true)} />
          )}
        </div>
      </div>

      <Modal isOpen={isSignUpOpen}>
        <SignUpModal
          onSuccess={() => setIsSignUpOpen(false)}
          onSwitch={() => {
            setIsSignUpOpen(false);
            // for SignInModalOpen()
          }}
        />
      </Modal>
    </header>
  );
};

export default Header;
