import classNames from 'classnames';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.scss';
import RecipeCardHorizontal from '../RecipeCardHorizontal/RecipeCardHorizontal';

export function RecipeList({
  items,
  columns = 3,
  cardType = 'portrait',
  onDelete,
}) {
  return (
    <section aria-label="Recipes">
      <div>
        <ul
          className={classNames(styles.wrapper, {
            [styles[`columns-${columns}`]]: columns,
          })}
        >
          {items.map((recipe, idx) => (
            <li key={idx}>
              {cardType === 'portrait' ? (
                <RecipeCard
                  id={recipe.id}
                  thumb={recipe.thumb}
                  title={recipe.title}
                  description={recipe.description}
                  ownerId={recipe.ownerId}
                  ownerName={recipe.owner.name}
                  ownerAvatar={recipe.owner.avatar}
                />
              ) : (
                <RecipeCardHorizontal
                  recipe={recipe}
                  onDelete={() => onDelete(recipe.id)}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
