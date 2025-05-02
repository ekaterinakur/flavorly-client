import styles from './RecipeCard.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { useMediaQuery } from 'react-responsive';
import Icon from '../Icon/Icon';

export function RecipeCard({ img, title, desc, authorAvatar, authorName }) {
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const handleAuthorClick = () => {
    console.log('Author clicked');
  };

  const handleFavoriteButtonClick = () => {
    setIsAddedToFavorites((prev) => !prev);
  };

  const handleRecipeButtonClick = () => {
    console.log('Recipe button clicked');
  };

  return (
    <article>
      <img
        src={img}
        alt={title}
        className={styles.image}
        height={isMdScreen ? 275 : 230}
        width="100%"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.footer}>
        <button
          type="button"
          className={styles.author}
          onClick={handleAuthorClick}
        >
          <Avatar
            src={authorAvatar}
            size={isMdScreen ? 40 : 32}
            alt={authorName}
          />
          <strong className={styles.authorName}>{authorName}</strong>
        </button>
        <div className={styles.actions}>
          <IconButton
            isActive={isAddedToFavorites}
            onClick={handleFavoriteButtonClick}
          >
            <Icon name="like" size={18} />
          </IconButton>
          <IconButton onClick={handleRecipeButtonClick}>
            <Icon name="arrow-up-right" size={18} />
          </IconButton>
        </div>
      </div>
    </article>
  );
}
