import styles from './RecipeInfo.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Avatar } from '../Avatar/Avatar';

import { RecipePreparation } from '../RecipePreparation/RecipePreparation';
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients';
import { RecipeCategories } from '../RecipeCategories/RecipeCategories';

export function RecipeInfo({ data }) {
  const isXsScreen = useMediaQuery({ query: '(min-width: 375px)' });

  return (
    <div className={styles.wrapper}>
      <div className={styles.cover}>
        <img src={data.img} alt={data.title} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>

        <RecipeCategories categories={data.categories} />

        {data.desc ? <p className={styles.desc}>{data.desc}</p> : null}

        <div className={styles.user}>
          <Avatar src={data.user.avatar} size={isXsScreen ? 50 : 32} />
          <div className={styles.userInfo}>
            <span>Created by:</span>
            <strong>{data.user.name}</strong>
          </div>
        </div>

        <h3 className={styles.subtitle}>Ingredients</h3>
        <RecipeIngredients ingredients={data.ingredients} />

        <h3 className={styles.subtitle}>Recipe Preparation</h3>
        <RecipePreparation preparation={data.preparation} />
      </div>
    </div>
  );
}
