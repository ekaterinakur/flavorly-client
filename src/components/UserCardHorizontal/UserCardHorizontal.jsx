import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { handleFollow, handleUnfollow } from '../../utils/followHandler';
import { IconButton } from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';

import style from './UserCardHorizontal.module.scss';

function UserCardHorizontal({ user, isFollowings, userId }) {
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isLgScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  const images = isLgScreen ? [1, 2, 3, 4] : [1, 2, 3];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipes = user.recipesArray;

  // Responsive render
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const visibleCount = isDesktop ? 4 : 3;
  const displayedRecipes = recipes?.slice(0, visibleCount);
  const displayedImages = images?.slice(0, visibleCount);

  const handleOpen = () => {
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

          {userId !== user.id && (
            <>
              {isFollowings || user?.isFollowing ? (
                <Button
                  className={style.button}
                  variant="outline"
                  size="medium"
                  onClick={() =>
                    handleUnfollow(dispatch, user.id, isFollowings)
                  }
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  className={style.button}
                  variant="outline"
                  size="medium"
                  onClick={() => handleFollow(dispatch, user.id, isFollowings)}
                >
                  Follow
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {isMdScreen && (
        <ul className={style.imageList}>
          {recipes?.length === 0
            ? displayedImages.map(() => (
                <li key={nanoid()} className={style.emptyItem}></li>
              ))
            : displayedRecipes.map((recipe) => (
                <li key={nanoid()} className={style.imageItem}>
                  <img
                    src={recipe.thumb}
                    className={style.image}
                    alt="Recipe thumbnail"
                  />
                </li>
              ))}
        </ul>
      )}

      <IconButton className={style.btnOpen} onClick={handleOpen}>
        <Icon name="arrow-up-right" size={18} />
      </IconButton>
    </div>
  );
}

export default UserCardHorizontal;
