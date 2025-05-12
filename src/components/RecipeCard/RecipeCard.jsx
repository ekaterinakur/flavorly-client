import styles from './RecipeCard.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { IconButton } from '../IconButton/IconButton';
import { useMediaQuery } from 'react-responsive';
import Icon from '../Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { useAuthor } from '../../hooks/useAuthor';
import { useFavoriteRecipe } from '../../hooks/useFavoriteRecipe';
import defaultRecipeImg from '../../assets/foodies_recipe.png';

export function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const toggleFavorite = useFavoriteRecipe({
    id: recipe.id,
    isFavorite: recipe.isFavorite,
  });

  const { handleClick: handleOpenAuthor } = useAuthor({ id: recipe.ownerId });

  const handleOpenRecipe = () => {
    navigate(`/recipe/${recipe.id}`);
    window.scrollTo(0, 0);
  };

  const handleImageError = (event) => {
    event.target.src = defaultRecipeImg;
    event.target.alt = 'Default image for recipe';
    event.target.onerror = null;
  };

  return (
    <article>
      {recipe.thumb ? (
        <img
          src={recipe.thumb}
          alt={recipe.title}
          className={styles.image}
          height={isMdScreen ? 275 : 230}
          width="100%"
          onError={handleImageError}
        />
      ) : (
        <img
          src={defaultRecipeImg}
          alt="Default image for recipe"
          className={styles.image}
          height={isMdScreen ? 275 : 230}
          width="100%"
        />
      )}

      <h3 className={styles.title}>{recipe.title}</h3>
      <p className={styles.desc}>{recipe.description}</p>
      <div className={styles.footer}>
        <button
          type="button"
          className={styles.author}
          onClick={handleOpenAuthor}
        >
          <Avatar
            src={recipe.owner.avatar}
            size={isMdScreen ? 40 : 32}
            alt={recipe.owner.name}
          />
          <strong className={styles.authorName}>{recipe.owner.name}</strong>
        </button>
        <div className={styles.actions}>
          <IconButton isActive={recipe.isFavorite} onClick={toggleFavorite}>
            <Icon name="like" size={18} />
          </IconButton>
          <IconButton onClick={handleOpenRecipe}>
            <Icon name="arrow-up-right" size={18} />
          </IconButton>
        </div>
      </div>
    </article>
  );
}
