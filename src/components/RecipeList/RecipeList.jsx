import classNames from 'classnames';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.scss';

export function RecipeList({ items, columns = 3 }) {
  return (
    <section aria-label="Recipes" className="section">
      <div className="container">
        <ul
          className={classNames(styles.wrapper, {
            [styles[`columns-${columns}`]]: columns,
          })}
        >
          {items.map((recipe, idx) => (
            <li key={idx}>
              <RecipeCard
                img={recipe.img}
                title={recipe.title}
                desc={recipe.desc}
                authorName={recipe.authorName}
                authorAvatar={recipe.authorAvatar}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
