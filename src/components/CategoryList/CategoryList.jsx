import styles from './CategoryList.module.scss';
import { CategoryCard } from '../CategoryCard/CategoryCard.jsx';

// Індекси широких карток (нумерація з 0)
const WIDE_CARD_INDICES = [2, 3, 7, 9];

export function CategoryList({ items, onSelect }) {
  return (
    <section aria-label="Categories">
      <ul className={styles.list}>
        {items.map((cat, index) => (
          <li
            key={cat.id}
            className={WIDE_CARD_INDICES.includes(index) ? styles.wideItem : ''}
          >
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
