import styles from './RecipeCard.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { useMediaQuery } from 'react-responsive';

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
            {/* TODO: use sprite */}
            <HeartIcon />
          </IconButton>
          <IconButton onClick={handleRecipeButtonClick}>
            {/* TODO: use sprite */}
            <LinkIcon />
          </IconButton>
        </div>
      </div>
    </article>
  );
}

function HeartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6296 3.4574C15.2465 3.07416 14.7917 2.77014 14.2911 2.56272C13.7905 2.3553 13.254 2.24854 12.7121 2.24854C12.1702 2.24854 11.6337 2.3553 11.1331 2.56272C10.6325 2.77014 10.1777 3.07416 9.7946 3.4574L8.9996 4.2524L8.2046 3.4574C7.43083 2.68364 6.38137 2.24894 5.2871 2.24894C4.19283 2.24894 3.14337 2.68364 2.3696 3.4574C1.59583 4.23117 1.16113 5.28063 1.16113 6.3749C1.16113 7.46918 1.59583 8.51864 2.3696 9.2924L3.1646 10.0874L8.9996 15.9224L14.8346 10.0874L15.6296 9.2924C16.0128 8.90934 16.3169 8.45451 16.5243 7.95392C16.7317 7.45333 16.8385 6.91677 16.8385 6.3749C16.8385 5.83304 16.7317 5.29648 16.5243 4.79589C16.3169 4.29529 16.0128 3.84047 15.6296 3.4574Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
