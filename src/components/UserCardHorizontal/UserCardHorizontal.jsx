import style from './UserCardHorizontal.module.scss';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserRecipes } from '../../api/recipes';
import Button from '../Button/Button';
import { selectIsFollowing } from '../../redux/selectors/subscriptionsSelectors';
import { handleFollow, handleUnfollow } from '../../utils/followHandler';
import { Avatar } from '../Avatar/Avatar';
import { nanoid } from '@reduxjs/toolkit';

function UserCardHorizontal({ user }) {
  // console.log(user);
  const images = [1, 2, 3, 4]; // Empty State images
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipes = user.recipesArray; // Add real key
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
            Own recipes: {user?.addedRecipesCounter}
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
        {recipes?.length === 0
          ? images?.map((item) => (
              <li key={nanoid()} className={style.emptyItem}></li>
            ))
          : recipes?.map((recipe) => (
              <li key={nanoid()} className={style.imageItem}>
                <img
                  src={recipe.thumb}
                  className={style.image}
                  alt="Recipe thumbnail"
                />
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
