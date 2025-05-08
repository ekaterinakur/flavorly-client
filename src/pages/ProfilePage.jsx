import { Outlet, useParams, NavLink } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import styles from './ProfilePage.module.scss';
import UserProfileCard from '../components/UserProfileCard/UserProfileCard';
import { MainTitle } from '../components/MainTitle/MainTitle.jsx';
import TabElement from '../components/TabElement/TabElement.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors/authSelectors.js';
import { useEffect } from 'react';
import { fetchUserDetails } from '../api/user.js';
import { selectUserById } from '../redux/slices/usersSlice.js';

export default function ProfilePage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const userDetails = useSelector(selectUserById);
  let isOwner = !userId || userId === currentUser?.id;
  console.log('isOwner: ', isOwner);
  // isOwner = false;

  // Перевірка userDetails
  // useEffect(() => {
  //   const testFetch = async () => {
  //     try {
  //       const result = await dispatch(
  //         fetchUserDetails('681bc3f7de82468ba1d43e61')
  //       ).unwrap();
  //       console.log('✅ Test fetchUserDetails result:', result);
  //     } catch (error) {
  //       console.error('❌ Test fetchUserDetails failed:', error);
  //     }
  //   };
  //   testFetch();
  // }, [dispatch]);

  useEffect(() => {
    if (!userId || userId === currentUser?.id) {
      return;
    }

    dispatch(fetchUserDetails(userId));
  }, [dispatch, userId, currentUser?.id]);

  return (
    <div className={`container ${styles.profile}`}>
      <BreadCrumbs />
      <MainTitle
        title="Profile"
        subtitle="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
      />
      <div className={styles.layout}>
        <UserProfileCard
          user={isOwner ? currentUser : userDetails}
          isOwner={isOwner}
        />

        <div className={styles.content}>
          {(isOwner && (
            <nav className={styles.tabs}>
              <TabElement path="my-recipes" title="My Recipes" />
              <TabElement path="my-favorites" title="My Favorites" />
              <TabElement path="my-followers" title="Followers" />
              <TabElement path="my-following" title="Following" />
            </nav>
          )) || (
            <nav className={styles.tabs}>
              <TabElement path="recipes" title="Recipes" />
              <TabElement path="followers" title="Followers" />
            </nav>
          )}

          <div className={styles.outlet}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
