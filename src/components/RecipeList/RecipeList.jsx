import classNames from 'classnames';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.scss';

export function RecipeList({ items, columns = 3 }) {
  return (
    <section aria-label="Recipes">
      <ul
        className={classNames(styles.wrapper, {
          [styles[`columns-${columns}`]]: columns,
        })}
      >
        {items.map((recipe, idx) => (
          <li key={idx}>
            <RecipeCard
              id={recipe.id}
              thumb={recipe.thumb}
              title={recipe.title}
              description={recipe.description}
              ownerName={recipe.owner.name}
              ownerAvatar={recipe.owner.avatar}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
