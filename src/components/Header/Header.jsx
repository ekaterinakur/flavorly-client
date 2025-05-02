import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './Header.scss';
import training_img from '../../assets/vika_must_be_deleted.png';
import AuthButtons from '../AuthButtons/AuthButtons.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Button from '../Button/Button.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Icon from '../Icon/Icon.jsx';

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
    <header className="header">
      <div className="container">
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
                  <Icon name="burger" size={28} color="#ffffff" />
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
