import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-hot-toast';
import { fetchCategories } from '../../api/categories.js';
import { setSelectedCategory } from '../../redux/slices/categoriesSlice';

import MainTitle from '../MainTitle/MainTitle';
import Loader from '../Loader/Loader';
import { CategoryCard } from '../CategoryCard/CategoryCard';

import styles from './CategoryList.module.scss';

export function CategoryList() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const [showAll, setShowAll] = useState(false);

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

  const handleCategorySelect = (categoryNameOrId) => {

    dispatch(setSelectedCategory(categoryNameOrId));
  };

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
  
    
  const handleToggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  const categoriesToDisplay = showAll ? categories : visibleCategories;

  return (
    <section aria-label="Categories" className="section">
      <div className="container">
        <MainTitle
          title="Categories"
          subtitle="Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."
        />
        <div className={styles.grid}>
          {categoriesToDisplay.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              imageUrl={cat.thumbnailUrl}
              onSelect={handleCategorySelect}
            />
          ))}
          {categories.length > visibleCategories.length && (
            <div
              className={styles.allCategoriesCardButton }
              onClick={handleToggleShowAll}
              role="button"
              tabIndex={0}
              aria-label={showAll ? 'Показати менше категорій' : 'Показати всі категорії'}
            >
              {showAll ? 'Less Categories' : 'All Categories'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
