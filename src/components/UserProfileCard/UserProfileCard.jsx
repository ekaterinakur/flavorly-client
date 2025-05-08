import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/selectors/authSelectors.js';
import { Avatar } from '../Avatar/Avatar.jsx';
import { IconButton } from '../IconButton/IconButton.jsx';
import Icon from '../Icon/Icon.jsx';
import toast from 'react-hot-toast';
import { updateAvatar } from '../../api/user.js';
import './UserProfileCard.scss';
import { currentUser } from '../../api/current.js';
import Button from '../Button/Button.jsx';
import { logoutUser } from '../../api/logout.js';

function UserProfileCard({ user, isOwner }) {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const favoriteCount = user?.favoriteRecipes?.length || 0;
  console.dir(user);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Будь ласка, оберіть зображення.');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', file);
    console.log(file.name, file.type, file.size);

    try {
      await dispatch(updateAvatar(formData));
      await dispatch(currentUser());
      toast.success('Аватар оновлено!');
    } catch (error) {
      console.log(error);
      toast.error('Помилка при оновленні аватара.');
    }
  };

  return (
    <aside className="sidebar">
      <div className="wrapper">
        <Avatar
          size=""
          className="avatar"
          src={`https://flavorly-api-gpdc.onrender.com/${user?.avatar}`}
        />
        {isOwner && (
          <>
            <IconButton
              className="button"
              isActive="true"
              children={<Icon name="plus" size={18} />}
              onClick={handleClick}
            />
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
              <span className="detail-bold">
                {user?.addedRecipes?.length || 0}
              </span>
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
