import { Outlet, useParams } from 'react-router-dom';

export default function ProfilePage() {
  const { id } = useParams();

  return (
    <div className="container main-container">
      Profile Page {id}
      <Outlet />
    </div>
  );
}
