import { useMediaQuery } from 'react-responsive';
import styles from './RecipeIngredient.module.scss';

export function RecipeIngredient({ ingredient }) {
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <li>
      <div className={styles.img}>
        <img
          src={ingredient.img}
          alt={ingredient.name}
          width={isMdScreen ? 60 : 55}
          height={isMdScreen ? 60 : 55}
        />
      </div>
      <div className={styles.info}>
        <strong>{ingredient.name}</strong>
        <span>{ingredient.amount}</span>
      </div>
    </li>
  );
}
