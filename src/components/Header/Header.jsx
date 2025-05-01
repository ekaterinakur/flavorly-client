import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Header.scss';
import training_img from '../../assets/vika_must_be_deleted.png';
import AuthButtons from '../AuthButtons/AuthButtons.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Button from '../Button/Button.jsx';
import NavBar from '../NavBar/NavBar.jsx';

const Header = () => {
  // const { isLogged, user } = useSelector();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const isLogged = true;
  const user = {
    name: 'Mike Milles',
    avatar: training_img,
  };

  return (
    <header className="header container ">
      <div className="header-wrapper">
        <Link to="/" className="logo">
          foodies
        </Link>

        {isLogged ? (
          <>
            <NavBar />
            <div className="user-wrapper">
              <UserInfo user={user} handleClick={handleClick} open={open} />
              <Button className="burger-menu-btn" onClick={() => {}}>
                <svg width={28} height={28}>
                  <use href="/src/assets/sprite.svg#burger-menu-icon"></use>
                </svg>
              </Button>
            </div>
          </>
        ) : (
          <AuthButtons />
        )}
      </div>
    </header>
  );
};

export default Header;
