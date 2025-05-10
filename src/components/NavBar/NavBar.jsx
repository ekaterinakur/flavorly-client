import classNames from 'classnames';
import './NavBar.scss';

import { NavLink } from 'react-router-dom';

const NavBar = ({ isDark }) => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={classNames('nav-link', { dark: isDark })}>
        Home
      </NavLink>
      <NavLink
        to="/recipe/add"
        className={classNames('nav-link', { dark: isDark })}
      >
        Add Recipe
      </NavLink>
    </nav>
  );
};

export default NavBar;
