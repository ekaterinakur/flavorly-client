import { NavLink, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const profile = pathname.includes('profile');

  console.log(profile);

  return (
    <div className="bread-crumb">
      <NavLink className="bread-crumb-link" to="/">
        Home
      </NavLink>
      <span className="bread-crumb-separator">/</span>
      {children ? (
        <p className="bread-crumb-item">{children}</p>
      ) : (
        <p className="bread-crumb-item">{profile ? 'Profile' : 'Add recipe'}</p>
      )}
    </div>
  );
};

export default BreadCrumbs;
