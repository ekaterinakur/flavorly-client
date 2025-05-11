import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../../api/userDetails.js';
import { selectUser } from '../../redux/selectors/authSelectors.js';
import { selectUserDetails } from '../../redux/selectors/userDetailsSelectors.js';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.jsx';
import MainTitle from '../../components/MainTitle/MainTitle.jsx';
import TabsList from '../../components/TabsList/TabsList.jsx';
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard.jsx';

import styles from './ProfilePage.module.scss';

export default function ProfilePage() {
  const { id: userId } = useParams(); // Отримуємо ID з URL
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const profileUser = useSelector(selectUserDetails);
  let isOwner = !userId || userId === currentUser?.id; // якщо id params != юзеру в Redux - це не оунер

  // isOwner = false;

  useEffect(() => {
    const idToFetch = userId || currentUser?.id;

    if (idToFetch) {
      dispatch(userDetails(idToFetch));
    }
  }, [dispatch, userId, currentUser?.id]); 

  return (
    <>
      <BreadCrumbs breadcrumbs="Profile" />
      <section className="section first-section">
        <div className="container">
          <MainTitle
            title="Profile"
            subtitle="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          />
          <div className={styles.layout}>
            <UserProfileCard
              user={isOwner ? currentUser : profileUser}
              isOwner={isOwner}
            />
            <TabsList isOwner={isOwner} />
          </div>
        </div>
      </section>
    </>
  );
}
