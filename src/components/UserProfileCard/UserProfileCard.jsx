import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '../Avatar/Avatar.jsx';
import { IconButton } from '../IconButton/IconButton.jsx';
import Icon from '../Icon/Icon.jsx';
import toast from 'react-hot-toast';
import './UserProfileCard.scss';
import { currentUser } from '../../api/current.js';
import Button from '../Button/Button.jsx';
import {
  selectFavoriteRecipes,
  selectMyRecipes,
} from '../../redux/selectors/recipesSelectors.js';
import { updateUserAvatar } from '../../api/avatar.js';
import {
  openLogoutModal
} from '../../redux/slices/modalSlice.js';

function UserProfileCard({ user, isOwner }) {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const myRecipes = useSelector(selectMyRecipes);
  // console.dir(user);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleLogout = () => {
    dispatch(openLogoutModal());
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Будь ласка, оберіть зображення.');
      return;
    }

    const resultAction = await dispatch(updateUserAvatar(file));

    if (updateUserAvatar.fulfilled.match(resultAction)) {
      toast.success('Аватар оновлено!');
    } else {
      toast.error('Помилка при оновленні аватара: ', error);
    }
  };

  return (
    <aside className="sidebar">
      <div className="wrapper">
        <Avatar size="" className="avatar" src={user?.avatar} />
        {isOwner && (
          <>
            <IconButton
              className="button"
              isActive="true"
              onClick={handleClick}
            >
              <Icon name="plus" size={18} />
            </IconButton>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </>
        )}

        <p className="name">{user?.name}</p>
        <ul>
          <li>
            <p className="detail">
              Email: <span className="detail-bold">{user?.email}</span>
            </p>
          </li>
          <li>
            <p className="detail">
              Added recipes:{' '}
              <span className="detail-bold">{myRecipes?.length || 0}</span>
            </p>
          </li>
          {isOwner && (
            <li>
              <p className="detail">
                Favorites:{' '}
                <span className="detail-bold">
                  {user?.favoriteRecipes?.length || 0}
                </span>
              </p>
            </li>
          )}
          <li>
            <p className="detail">
              Followers:
              <span className="detail-bold">
                {user?.followers?.length || 0}
              </span>
            </p>
          </li>
          {isOwner && (
            <li>
              <p className="detail">
                Following:{' '}
                <span className="detail-bold">
                  {user?.followings?.length || 0}
                </span>
              </p>
            </li>
          )}
        </ul>
      </div>
      {isOwner && (
        <Button
          type="button"
          size="large"
          children="Logout"
          onClick={handleLogout}
          className="logout"
        />
      )}
    </aside>
  );
}

export default UserProfileCard;
