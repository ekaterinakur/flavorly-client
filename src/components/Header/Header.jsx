import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Button from '../Button/Button.jsx';
import './Header.scss';
import training_img from '../../assets/vika_must_be_deleted.png';

const Header = () => {
  // const { isLogged, user } = useSelector();

  const [open, setOpen] = useState(false);

  const handeClick = () => {
    setOpen(!open);
  };

  const isLogged = true;
  const user = {
    name: 'Mike Milles',
    avatar: training_img,
  };

  return (
    <header className="container header">
      <div className="header-container">
        <Link to="/" className="logo">
          foodies
        </Link>

        {isLogged ? (
          <div className="user-info">
            <Button onClick={handeClick}>
              <img
                className="user-avatar"
                src={user.avatar}
                alt="user-image"
              ></img>
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
        ) : (
          <div className="header-login">
            <ul className="header-login-list">
              <li className="header-login-item">
                <Button classname="sign-in">SIGN IN</Button>
              </li>
              <li className="header-login-item">
                <Button classname="sign-out">SIGN OUT</Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

{
  /* <nav className="navbar">
  <Link to="/">Home</Link>
</nav>; */
}
