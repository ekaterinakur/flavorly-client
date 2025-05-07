import { useMediaQuery } from 'react-responsive';
import styles from './RecipeAuthor.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors/authSelectors';
import { openSignInModal } from '../../redux/slices/modalSlice';
import { Avatar } from '../Avatar/Avatar';

export function RecipeAuthor({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isXsScreen = useMediaQuery({ query: '(min-width: 375px)' });

  const handleAuthorClick = () => {
    if (isLoggedIn) {
      navigate(`/profile/${user.id}`);
    } else {
      dispatch(openSignInModal());
    }
  };

  return (
    <button type="button" className={styles.user} onClick={handleAuthorClick}>
      <Avatar src={user.avatar} size={isXsScreen ? 50 : 32} />
      <div className={styles.userInfo}>
        <span>Created by:</span>
        <strong>{user.name}</strong>
      </div>
    </button>
  );
}
