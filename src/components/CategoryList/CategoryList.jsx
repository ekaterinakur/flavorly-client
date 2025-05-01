import styles from './CategoryList.module.scss';
import { CategoryCard } from '../CategoryCard/CategoryCard.jsx';

export function CategoryList({ items, onSelect }) {
  return (
    <section aria-label="Categories">
      <ul className={styles.list}>
        {items.map((cat) => (
          <li key={cat.id}>
            <CategoryCard
              id={cat.id}
              name={cat.name}
              imageUrl={cat.imageUrl}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
