import styles from './RecipeInfo.module.scss';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation';
import IngredientList from '../IngredientList/IngredientList';
import { RecipeCategories } from '../RecipeCategories/RecipeCategories';
import { RecipeAuthor } from '../RecipeAuthor/RecipeAuthor';
import Button from '../Button/Button';
import { useFavoriteRecipe } from '../../hooks/useFavoriteRecipe';

export function RecipeInfo({ recipe }) {
  const { handleClick, isAddedToFavorite } = useFavoriteRecipe({
    id: recipe.id,
  });

  return (
    <section className="section first-section">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.cover}>
            <img src={recipe.thumb} alt={recipe.title} />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{recipe.title}</h1>

            <RecipeCategories category={recipe.category} time={recipe.time} />

            {recipe.description ? (
              <p className={styles.desc}>{recipe.description}</p>
            ) : null}

            <RecipeAuthor
              avatar={recipe.owner.avatar}
              name={recipe.owner.name}
              id={recipe.ownerId}
            />

            <h3 className={styles.subtitle}>Ingredients</h3>
            <IngredientList items={recipe.Ingredients} />

            {recipe.instructions.length ? (
              <>
                <h3 className={styles.subtitle}>Recipe Preparation</h3>
                <RecipePreparation preparation={recipe.instructions} />
              </>
            ) : null}

            <Button
              className={styles.button}
              variant="outline"
              onClick={handleClick}
            >
              {isAddedToFavorite ? 'Remove from favorites' : 'ADD TO FAVORITES'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
