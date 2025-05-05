import { Outlet, useParams, NavLink } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import styles from './ProfilePage.module.scss';

export default function ProfilePage() {
  const { id } = useParams();
  const isOwnProfile = !id;

  return (
    <div className={`container ${styles.profile}`}>
      <BreadCrumbs />

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <img
            src="/default-avatar.jpg"
            alt="Avatar"
            className={styles.avatar}
          />
          <h2 className={styles.name}>
            {isOwnProfile ? 'My Profile' : `User #${id}`}
          </h2>
        </aside>

        <div className={styles.content}>
          <nav className={styles.tabs}>
            {isOwnProfile ? (
              <>
                <NavLink to="my-recipes" className={styles.tab}>
                  My Recipes
                </NavLink>
                <NavLink to="my-favorites" className={styles.tab}>
                  Favorites
                </NavLink>
                <NavLink to="my-followers" className={styles.tab}>
                  Followers
                </NavLink>
                <NavLink to="my-following" className={styles.tab}>
                  Following
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="recipes" className={styles.tab}>
                  Recipes
                </NavLink>
                <NavLink to="followers" className={styles.tab}>
                  Followers
                </NavLink>
              </>
            )}
          </nav>

          <div className={styles.outlet}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
