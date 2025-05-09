import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { fetchCategories } from '../../api/categories.js';

import MainTitle from '../MainTitle/MainTitle';
import Loader from '../Loader/Loader';
import { CategoryCard } from '../CategoryCard/CategoryCard';

import styles from './CategoryList.module.scss';

export function CategoryList({ onSelect }) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const {
    items: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Failed to load categories. Please try again later.');
    }
  }, [error]);

  if (loading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  if (!categories.length) return null;

  const visibleCategories = isMobile
    ? categories.slice(0, 8)
    : categories.slice(0, 11);
  const allCategory = { id: 'all', name: 'All categories' };

  const renderedItems = [...visibleCategories, allCategory];

  return (
    <section aria-label="Categories" className="section">
      <div className="container">
        <MainTitle
          title="Categories"
          subtitle="Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."
        />
        <div className={styles.grid}>
          {renderedItems.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              imageUrl={cat.thumbnailUrl}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

CategoryList.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
