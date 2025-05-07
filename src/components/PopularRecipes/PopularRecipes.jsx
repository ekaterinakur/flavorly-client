import { RecipeList } from '../RecipeList/RecipeList';
import styles from './PopularRecipes.module.scss';

export function PopularRecipes({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <>
      <h2 className={styles.title}>Popular recipes</h2>
      <RecipeList items={items} columns={4} />
    </>
  );
}
