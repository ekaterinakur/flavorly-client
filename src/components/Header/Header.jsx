import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';

import './Header.scss';
import training_img from '../../assets/vika_must_be_deleted.png';
import AuthButtons from '../AuthButtons/AuthButtons.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Button from '../Button/Button.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Icon from '../Icon/Icon.jsx';

const Header = () => {
  // const { isLogged, user } = useSelector();

  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const [open, setOpen] = useState(false);
  const userMenuRef = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const isLoggedIn = true;
  const user = {
    name: 'Mike Milles',
    avatar: training_img,
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

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
            <AuthButtons />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
