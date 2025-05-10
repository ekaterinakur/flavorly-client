import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import MainTitle from '../MainTitle/MainTitle';
import { RecipeList } from '../RecipeList/RecipeList';
import RecipeFilter from '../RecipeFilters/RecipeFilters';
import { ListPagination } from '../ListPagination/ListPagination';
import { fetchRecipesByCategory } from '../../api/recipes';
import { clearSelectedCategory } from '../../redux/slices/selectedCategorySlice';
import { selectSelectedCategory } from '../../redux/selectors/selectedCategorySelectors';
import {
  selectRecipes,
  selectRecipesLoading,
  selectRecipesTotal,
  selectRecipesPage,
} from '../../redux/selectors/recipesSelectors';
import { setRecipesPage } from '../../redux/slices/recipesSlice';

import styles from './Recipes.module.scss';
import Loader from '../Loader/Loader';

export function Recipes() {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(selectSelectedCategory);
  const recipes = useSelector(selectRecipes);
  const loading = useSelector(selectRecipesLoading);
  const total = useSelector(selectRecipesTotal);
  const currentPage = useSelector(selectRecipesPage);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchRecipesByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  const handlePageChange = (page) => {
    dispatch(setRecipesPage(page));
    if (selectedCategory) {
      dispatch(fetchRecipesByCategory({ category: selectedCategory, page }));
    } else {
      dispatch(fetchRecipesByCategory({ page }));
    }
  };

  const handleBackClick = () => {
    dispatch(clearSelectedCategory());
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <BackButton
            className={styles.backButton}
            backUrl="/"
            onClick={handleBackClick}
          />
          <MainTitle
            title={
              selectedCategory === 'all' ? 'All Recipes' : `${selectedCategory}`
            }
            subtitle="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires."
          />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.content}>
            <RecipeFilter className={styles.filter} />
            <div className={styles.list}>
              <RecipeList items={recipes} className={styles.list} />
              <ListPagination
                currentPage={currentPage.toString()}
                totalPages={Math.ceil(total / 6).toString()}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
