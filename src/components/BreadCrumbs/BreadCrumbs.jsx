import { NavLink, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = ({ breadcrumbs }) => {
  const { pathname } = useLocation();

  const profile = pathname.includes('profile');

  return (
    <div className="bread-crumb">
      <NavLink className="bread-crumb-link" to="/">
        Home
      </NavLink>
      <span className="bread-crumb-separator">/</span>
      {breadcrumbs ? (
        <p className="bread-crumb-item">{breadcrumbs}</p>
      ) : (
        <p className="bread-crumb-item">{profile ? 'Profile' : 'Add recipe'}</p>
      )}
    </div>
  );
};

export default BreadCrumbs;
