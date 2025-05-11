import { useNavigate } from 'react-router-dom';
import styles from './RecipeCardHorizontal.module.scss';
import { IconButton } from '../IconButton/IconButton';
import Icon from '../Icon/Icon';

export default function RecipeCardHorizontal({ recipe, isOwner, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (onDelete) {
      await onDelete();
    }
  };

  const handleOpen = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className={styles.card}>
      <img src={recipe.thumb} alt={recipe.title} className={styles.image} />

      <div className={styles.content}>
        <p className={styles.title}>{recipe.title}</p>
        <p className={styles.desc}>{recipe.description}</p>
      </div>

      <div className={styles.actions}>
        <IconButton onClick={handleOpen}>
          <Icon name="arrow-up-right" size={18} />
        </IconButton>
        {isOwner && (
          <IconButton onClick={handleDelete}>
            <Icon name="trash" size={18} />
          </IconButton>
        )}
      </div>
    </div>
  );
}
