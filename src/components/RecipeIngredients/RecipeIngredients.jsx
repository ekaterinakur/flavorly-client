import { RecipeIngredient } from '../RecipeIngredient/RecipeIngredient';
import styles from './RecipeIngredients.module.scss';

export function RecipeIngredients({ ingredients }) {
  if (!ingredients || !ingredients.length) return null;

  return (
    <ul className={styles.ingredients}>
      {ingredients.map((ingredient, index) => (
        <RecipeIngredient key={index} ingredient={ingredient} />
      ))}
    </ul>
  );
}
