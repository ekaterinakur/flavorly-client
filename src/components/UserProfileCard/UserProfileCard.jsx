import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar } from '../Avatar/Avatar.jsx';
import { IconButton } from '../IconButton/IconButton.jsx';
import Icon from '../Icon/Icon.jsx';
import toast from 'react-hot-toast';
import './UserProfileCard.scss';
import Button from '../Button/Button.jsx';
import { updateUserAvatar } from '../../api/avatar.js';
import { openLogoutModal } from '../../redux/slices/modalSlice.js';
import { handleFollow, handleUnfollow } from '../../utils/followHandler.js';

function UserProfileCard({ user, isOwner, isFollowing }) {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
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
      toast.error('Помилка при оновленні аватара');
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
              Added recipes:
              <span className="detail-bold">{user?.addedRecipes}</span>
            </p>
          </li>
          {isOwner && (
            <li>
              <p className="detail">
                Favorites:{' '}
                <span className="detail-bold">{user?.favoriteRecipes}</span>
              </p>
            </li>
          )}
          <li>
            <p className="detail">
              Followers:
              <span className="detail-bold">{user?.followers}</span>
            </p>
          </li>
          {isOwner && (
            <li>
              <p className="detail">
                Following:{' '}
                <span className="detail-bold">{user?.following}</span>
              </p>
            </li>
          )}
        </ul>
      </div>
      {isOwner ? (
        <Button
          type="button"
          size="large"
          onClick={handleLogout}
          className="logout"
        >
          Logout
        </Button>
      ) : isFollowing ? (
        <Button
          variant="outline"
          size="large"
          onClick={() => handleUnfollow(dispatch, user.id)}
        >
          Unfollow
        </Button>
      ) : (
        <Button
          variant="outline"
          size="large"
          onClick={() => handleFollow(dispatch, user.id)}
        >
          Follow
        </Button>
      )}
    </aside>
  );
}

export default UserProfileCard;
