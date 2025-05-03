import './NavBar.scss';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/addrecipe">
        Add Recipe
      </NavLink>
    </nav>
  );
};

export default NavBar;
