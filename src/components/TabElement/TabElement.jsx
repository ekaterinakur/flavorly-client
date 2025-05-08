import { NavLink } from 'react-router-dom';
import './TabElement.scss';

function TabElement({ path, title }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? `tab-active` : 'tab')}
    >
      {title}
    </NavLink>
  );
}

export default TabElement;
