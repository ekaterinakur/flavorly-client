import { Outlet, useParams, NavLink } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import styles from './ProfilePage.module.scss';
import Button from '../components/Button/Button';
import UserProfileCard from '../components/UserProfileCard/UserProfileCard';
import { logoutUser } from '../api/logout.js';
import { useDispatch } from 'react-redux';

export default function ProfilePage() {
  const { id } = useParams();
  const isOwnProfile = !id;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={`container ${styles.profile}`}>
      <BreadCrumbs />
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h2 className={styles.name}>
            {isOwnProfile ? 'PROFILE' : `User #${id}`}
          </h2>
          <UserProfileCard />
          <Button
            type="button"
            size="large"
            children="Logout"
            onClick={handleLogout}
          />
        </aside>

        <div className={styles.content}>
          <nav className={styles.tabs}>
            <NavLink
              to="my-recipes"
              className={({ isActive }) =>
                isActive ? `${styles.tab} active` : styles.tab
              }
            >
              My Recipes
            </NavLink>
            <NavLink
              to="my-favorites"
              className={({ isActive }) =>
                isActive ? `${styles.tab} active` : styles.tab
              }
            >
              My Favorites
            </NavLink>
            <NavLink
              to="my-followers"
              className={({ isActive }) =>
                isActive ? `${styles.tab} active` : styles.tab
              }
            >
              Followers
            </NavLink>
            <NavLink
              to="my-following"
              className={({ isActive }) =>
                isActive ? `${styles.tab} active` : styles.tab
              }
            >
              Following
            </NavLink>
          </nav>

          <div className={styles.outlet}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
