import styles from './RecipeInfo.module.scss';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation';
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients';
import { RecipeCategories } from '../RecipeCategories/RecipeCategories';
import { RecipeAuthor } from '../RecipeAuthor/RecipeAuthor';

export function RecipeInfo({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cover}>
        <img src={data.img} alt={data.title} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>

        <RecipeCategories categories={data.categories} />

        {data.desc ? <p className={styles.desc}>{data.desc}</p> : null}

        <RecipeAuthor user={data.user} />

        <h3 className={styles.subtitle}>Ingredients</h3>
        <RecipeIngredients ingredients={data.ingredients} />

        <h3 className={styles.subtitle}>Recipe Preparation</h3>
        <RecipePreparation preparation={data.preparation} />
      </div>
    </div>
  );
}
