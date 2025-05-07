import { Outlet, useParams, NavLink } from 'react-router-dom';
import styles from './ProfilePage.module.scss';
import { MainTitle } from '../components/MainTitle/MainTitle';

export default function ProfilePage() {
  const { id } = useParams();
  const isOwnProfile = !id;

  return (
    <section className="section">
      <div className="container">
        <MainTitle
          title="PROFILE"
          subtitle="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          breadcrumbs="Profile"
        />

        <div className="profile-grid">
          <aside className={styles.sidebar}></aside>

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
    </section>
  );
}
