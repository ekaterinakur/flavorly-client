import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import styles from './RecipePage.module.scss';
import { Avatar } from '../components/Avatar/Avatar';
import { RecipeList } from '../components/RecipeList/RecipeList';
import Button from '../components/Button/Button';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { RECIPE_MOCK } from '../mocks/recipe';

export default function RecipePage() {
  const { id } = useParams();
  const isXsScreen = useMediaQuery({ query: '(min-width: 375px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  console.log('Recipe ID:', id);

  const handleAddToFavorites = () => {
    // Logic to add the recipe to favorites
    console.log('Add to favorites clicked');
  };

  return (
    <div className="container main-container">
      <BreadCrumbs>{RECIPE_MOCK.title}</BreadCrumbs>

      <div className={styles.wrapper}>
        <div className={styles.cover}>
          <img src={RECIPE_MOCK.img} alt={RECIPE_MOCK.title} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{RECIPE_MOCK.title}</h1>

          {RECIPE_MOCK.categories.length ? (
            <ul className={styles.categories}>
              {RECIPE_MOCK.categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          ) : null}

          {RECIPE_MOCK.desc ? (
            <p className={styles.desc}>{RECIPE_MOCK.desc}</p>
          ) : null}

          <div className={styles.user}>
            <Avatar src={RECIPE_MOCK.user.avatar} size={isXsScreen ? 50 : 32} />
            <div className={styles.userInfo}>
              <span>Created by:</span>
              <strong>{RECIPE_MOCK.user.name}</strong>
            </div>
          </div>

          {RECIPE_MOCK.ingredients.length ? (
            <>
              <h3 className={styles.subtitle}>Ingredients</h3>
              <ul className={styles.ingredients}>
                {RECIPE_MOCK.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <div className={styles.ingredientImg}>
                      <img
                        src={ingredient.img}
                        alt={ingredient.name}
                        width={isMdScreen ? 60 : 55}
                        height={isMdScreen ? 60 : 55}
                      />
                    </div>
                    <div className={styles.ingredientInfo}>
                      <strong>{ingredient.name}</strong>
                      <span>{ingredient.amount}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {RECIPE_MOCK.preparation ? (
            <>
              <h3 className={styles.subtitle}>Recipe Preparation</h3>
              {RECIPE_MOCK.preparation.split('\n').map((line, index) => (
                <p
                  key={index}
                  className={classNames(styles.preparation, {
                    [styles.preparationSpace]: index !== 0,
                  })}
                >
                  {line}
                  <br />
                </p>
              ))}
            </>
          ) : null}

          <Button
            className={styles.button}
            variant="outline"
            onClick={handleAddToFavorites}
          >
            aDD TO fAVORITES
          </Button>
        </div>
      </div>

      {RECIPE_MOCK.popularRecipes.length ? (
        <>
          <h2 className={classNames(styles.subtitle, styles.popularSubtitle)}>
            Popular recipes
          </h2>
          <RecipeList items={RECIPE_MOCK.popularRecipes} columns={4} />
        </>
      ) : null}
    </div>
  );
}
