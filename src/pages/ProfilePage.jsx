import { Outlet, useParams, NavLink } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import './ProfilePage.scss';
import UserProfileCard from '../components/UserProfileCard/UserProfileCard';
import { MainTitle } from '../components/MainTitle/MainTitle.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors/authSelectors.js';
import { useEffect } from 'react';
import { userDetails } from '../api/userDetails.js';
import TabsList from '../components/TabsList/TabsList.jsx';
import { selectUserDetails } from '../redux/selectors/userDetailsSelectors.js';

export default function ProfilePage() {
  const { userId } = useParams(); // Отримуємо ID з URL
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const profileUser = useSelector(selectUserDetails);
  let isOwner = !userId || userId === currentUser?.id; // якщо id params != юзеру в Redux - це не оунер

  // isOwner = false;

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const result = await dispatch(
          userDetails(isOwner ? currentUser?.id : userId)
        );
        // console.log('✅ User:', result);
      } catch (error) {
        // console.error('❌ Error :', error);
      }
    };

    if ((isOwner && currentUser?.id) || userId) {
      getUserDetails();
    }
  }, [dispatch, userId, currentUser?.id, isOwner]);

  return (
    <div className="container">
      <BreadCrumbs />
      <MainTitle
        title="Profile"
        subtitle="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
      />
      <div className="layout">
        <UserProfileCard
          user={isOwner ? currentUser : profileUser}
          isOwner={isOwner}
        />
        <TabsList isOwner={isOwner} />
      </div>
    </div>
  );
}
