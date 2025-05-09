import styles from './RecipeCard.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { IconButton } from '../IconButton/IconButton';
import { useMediaQuery } from 'react-responsive';
import Icon from '../Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { useAuthor } from '../../hooks/useAuthor';
import { useFavoriteRecipe } from '../../hooks/useFavoriteRecipe';

export function RecipeCard({
  id,
  thumb,
  title,
  description,
  ownerAvatar,
  ownerName,
}) {
  const navigate = useNavigate();
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const { isLoading, handleClick, isAddedToFavorite } = useFavoriteRecipe({
    id,
  });
  const { handleClick: handleAuthorClick } = useAuthor({ id });

  const handleRecipeButtonClick = () => {
    navigate(`/recipe/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <article className="">
      <img
        src={thumb}
        alt={title}
        className={styles.image}
        height={isMdScreen ? 275 : 230}
        width="100%"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.footer}>
        <button
          type="button"
          className={styles.author}
          onClick={handleAuthorClick}
        >
          <Avatar
            src={ownerAvatar}
            size={isMdScreen ? 40 : 32}
            alt={ownerName}
          />
          <strong className={styles.authorName}>{ownerName}</strong>
        </button>
        <div className={styles.actions}>
          <IconButton
            isActive={isAddedToFavorite}
            onClick={handleClick}
            disabled={isLoading}
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
