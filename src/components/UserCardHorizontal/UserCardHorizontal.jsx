import style from './UserCardHorizontal.module.scss';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRecipes } from '../../redux/selectors/recipesSelectors';
import { useEffect } from 'react';
import { fetchUserRecipes } from '../../api/recipes';
import Button from '../Button/Button';
import { selectIsFollowing } from '../../redux/selectors/subscriptionsSelectors';
import { handleFollow, handleUnfollow } from '../../utils/followHandler';
import { Avatar } from '../Avatar/Avatar';
import { nanoid } from '@reduxjs/toolkit';

function UserCardHorizontal({ user }) {
  const images = [1, 2, 3, 4];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipes = useSelector((state) => selectUserRecipes(state, user.id));
  const isFollowing = useSelector(selectIsFollowing(user.id));

  useEffect(() => {
    if (user.id) {
      dispatch(fetchUserRecipes(user.id));
    }
  }, [dispatch, user.id]);

  const handleOpen = () => {
    console.log('Open user profile button clicked');
    navigate(`/profile/${user.id}`);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.userWrapper}>
        <Avatar src={user.avatar} size="" className={style.avatar} />
        <div className={style.userDetailsWrapper}>
          <p className={style.name}>{user.name}</p>
          <p className={style.recipeCount}>
            Own recipes: {user?.addedRecipes || 'ADD LATER'}
          </p>

          {isFollowing ? (
            <Button
              className={style.button}
              variant="outline"
              size="medium"
              onClick={() => handleUnfollow(dispatch, user.id)}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              className={style.button}
              variant="outline"
              size="medium"
              onClick={() => handleFollow(dispatch, user.id)}
            >
              Follow
            </Button>
          )}
        </div>
      </div>

      <ul className={style.imageList}>
        {images?.map((recipe) => (
          // <li key={recipe.user.id} className={style.imageItem}>
          <li key={nanoid()} className={style.imageItem}>
            {/* <img scr={} className='' /> */}
            <p>ADD</p>
          </li>
        ))}
      </ul>

      <IconButton onClick={handleOpen}>
        <Icon name="arrow-up-right" size={18} />
      </IconButton>
    </div>
  );
}

export default UserCardHorizontal;
