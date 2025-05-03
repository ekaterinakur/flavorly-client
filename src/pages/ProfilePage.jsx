import { Outlet, useParams } from 'react-router-dom';

import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.jsx';

export default function ProfilePage() {
  const { id } = useParams();

  return (
    <div className="container main-container">
      Profile Page {id}
      <BreadCrumbs />
      <Outlet />
    </div>
  );
}
