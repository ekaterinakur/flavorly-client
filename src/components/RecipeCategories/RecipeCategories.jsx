import styles from './RecipeCategories.module.scss';

export function RecipeCategories({ category, time }) {
  if (!category && !time) return null;

  return (
    <ul className={styles.categories}>
      {category ? <li>{category}</li> : null}
      {time ? <li>{`${time} min`}</li> : null}
    </ul>
  );
}
