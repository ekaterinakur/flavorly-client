import { useMediaQuery } from 'react-responsive';
import styles from './RecipeAuthor.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { useAuthor } from '../../hooks/useAuthor';

export function RecipeAuthor({ avatar, name, id }) {
  const { handleClick } = useAuthor({ id });
  const isXsScreen = useMediaQuery({ query: '(min-width: 375px)' });

  return (
    <button type="button" className={styles.user} onClick={handleClick}>
      <Avatar src={avatar} size={isXsScreen ? 50 : 32} />
      <div className={styles.userInfo}>
        <span>Created by:</span>
        <strong>{name}</strong>
      </div>
    </button>
  );
}
