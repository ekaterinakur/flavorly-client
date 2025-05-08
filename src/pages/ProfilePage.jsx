import { Outlet, useParams, NavLink } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import styles from './ProfilePage.module.scss';
import useUserProfile from '../hooks/useUserProfile';
import UserProfileCard from '../components/UserProfileCard/userProfileCard';

const ProfilePage = () => {
  const { id } = useParams();
  const isOwnProfile = !id;
  const { profile, loading } = useUserProfile(id);

  return (
    <div className={`container ${styles.profile}`}>
      <BreadCrumbs />
      <h2 className={styles.name}>
        {isOwnProfile ? 'PROFILE' : `User #${id}`}
      </h2>
      <p className={styles.subtitle}>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </p>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          {!loading && <UserProfileCard profile={profile} />}
        </aside>

        <div className={styles.content}>
          <nav className={styles.tabs}>
            <NavLink
              to="my-recipes"
              className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.active}` : styles.tab
              }
            >
              My Recipes
            </NavLink>
            <NavLink
              to="my-favorites"
              className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.active}` : styles.tab
              }
            >
              My Favorites
            </NavLink>
            <NavLink
              to="my-followers"
              className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.active}` : styles.tab
              }
            >
              Followers
            </NavLink>
            <NavLink
              to="my-following"
              className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.active}` : styles.tab
              }
            >
              Following
            </NavLink>
          </nav>

          <div className={styles.outlet}>
            {loading ? <p>Loading profile...</p> : <Outlet />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
