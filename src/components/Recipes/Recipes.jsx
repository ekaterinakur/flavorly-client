import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import MainTitle from '../MainTitle/MainTitle';
import { RecipeList } from '../RecipeList/RecipeList';
import RecipeFilter from '../RecipeFilters/RecipeFilters';
import { ListPagination } from '../ListPagination/ListPagination';
import { fetchRecipes } from '../../api/recipes';
import {
  selectRecipes,
  selectRecipesLoading,
  selectRecipesPagination,
  selectRecipesFilters,
} from '../../redux/selectors/recipesSelectors';
import { clearFilters, setRecipesPage } from '../../redux/slices/recipesSlice';
import { DEFAULT_MAIN_PAGE_LIMIT } from '../../utils/constants';

import styles from './Recipes.module.scss';
import Loader from '../Loader/Loader';

export function Recipes() {
  const dispatch = useDispatch();

  const recipes = useSelector(selectRecipes);
  const loading = useSelector(selectRecipesLoading);
  const filters = useSelector(selectRecipesFilters);
  const { page: currentPage, totalPages } = useSelector(
    selectRecipesPagination
  );

  useEffect(() => {
    dispatch(
      fetchRecipes({
        ...filters,
        category: filters.category !== 'all' ? filters.category : '',
        page: 1,
        limit: DEFAULT_MAIN_PAGE_LIMIT,
      })
    );
  }, [dispatch, filters]);

  // useEffect(() => () => dispatch(clearFilters()));

  const handlePageChange = (page) => {
    dispatch(setRecipesPage(page));

    dispatch(
      fetchRecipes({
        ...filters,
        category: filters.category !== 'all' ? filters.category : '',
        page,
        limit: DEFAULT_MAIN_PAGE_LIMIT,
      })
    );
  };

  const handleBackClick = () => {
    dispatch(clearFilters());
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
              filters.category === 'all'
                ? 'All Recipes'
                : `${filters.category}`
            }
            subtitle="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires."
          />
        </div>
        <div className={styles.content}>
          <RecipeFilter className={styles.filter} />

          {loading ? (
            <Loader />
          ) : (
            <div className={styles.list}>
              <RecipeList items={recipes} className={styles.list} />
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
