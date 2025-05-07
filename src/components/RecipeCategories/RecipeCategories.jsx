import styles from './RecipeCategories.module.scss';

export function RecipeCategories({ categories }) {
  if (!categories || !categories.length) return null;

  return (
    <ul className={styles.categories}>
      {categories.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  );
}
