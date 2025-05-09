import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import styles from './IngredientCard.module.scss';

const IngredientCard = ({ ingredient, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={ingredient.img}
          alt={ingredient.name}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{ingredient.name}</p>
        <p className={styles.measure}>{ingredient.measure}</p>
      </div>

      <Button
        type="button"
        variant="text"
        className={styles.remove}
        onClick={() => onDelete()}
      >
        <Icon name="cross" size="1rem" />
      </Button>
    </div>
  );
};

export default IngredientCard;
