import styles from './RecipeCard.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { useMediaQuery } from 'react-responsive';
import Icon from '../Icon/icon';

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

function LinkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 12.75L12.75 5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 5.25H12.75V12.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
