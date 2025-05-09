import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors/authSelectors.js';
import { selectUserDetails } from '../../redux/slices/userDetails.js';
import { fetchUserDetails } from '../../api/user.js';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.jsx';
import MainTitle from '../../components/MainTitle/MainTitle.jsx';
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard.jsx';
import TabsList from '../../components/TabsList/TabsList.jsx';

import styles from './ProfilePage.module.scss';

export default function ProfilePage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const userDetails = useSelector(selectUserDetails);
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
    <>
      <BreadCrumbs breadcrumbs="Profile" />
      <section className="section">
        <div className="container">
          <MainTitle
            title="Profile"
            subtitle="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          />
          <div className={styles.layout}>
            <UserProfileCard
              user={isOwner ? currentUser : userDetails}
              isOwner={isOwner}
            />
            <TabsList isOwner={isOwner} />
          </div>
        </div>
      </section>
    </>
  );
}
