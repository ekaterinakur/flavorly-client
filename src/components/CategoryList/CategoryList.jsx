import PropTypes from 'prop-types';
import styles from './CategoryList.module.scss';
import { useMediaQuery } from 'react-responsive';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { MainTitle } from '../MainTitle/MainTitle';

export function CategoryList({ items, onSelect }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const allCategory = items.find((cat) => !cat.imageUrl);
  const otherCategories = items.filter((cat) => cat.imageUrl);

  let visibleItems;
  if (isMobile) {
    visibleItems = otherCategories.slice(0, 8);
    if (allCategory) {
      visibleItems.push(allCategory);
    }
  } else {
    visibleItems = items;
  }

  return (
    <section aria-label="Categories" className="section">
      <div className="container">
        <MainTitle
          title="Categories"
          subtitle="Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."
        />
        <div className={styles.grid}>
          {visibleItems.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              imageUrl={cat.imageUrl}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

CategoryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
