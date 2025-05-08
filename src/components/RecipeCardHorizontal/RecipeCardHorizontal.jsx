import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RecipeCardHorizontal.module.scss';
import { IconButton } from '../IconButton/IconButton';
import Icon from '../Icon/Icon';

export default function RecipeCardHorizontal({ recipe, onDelete }) {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsVisible(false);
    console.log('Delete recipe button clicked');
    if (onDelete) {
      await onDelete(recipe.id);
    }
  };

  const handleOpen = () => {
    console.log('Open recipe button clicked');
    navigate(`/recipe/${recipe.id}`);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.card}>
      <img src={recipe.img} alt={recipe.title} className={styles.image} />

      <div className={styles.content}>
        <p className={styles.title}>{recipe.title}</p>
        <p className={styles.desc}>{recipe.description}</p>
      </div>

      <div className={styles.actions}>
        <IconButton onClick={handleOpen}>
          <Icon name="arrow-up-right" size={18} />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <Icon name="trash" size={18} />
        </IconButton>
      </div>
    </div>
  );
}
