import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { RecipeList } from '../RecipeList/RecipeList';
import styles from './PopularRecipes.module.scss';
import Loader from '../Loader/Loader';
import { fetchPopularRecipes } from '../../api/recipes';
import {
  selectPopularRecipes,
  selectPopularRecipesError,
  selectPopularRecipesLoading,
} from '../../redux/selectors/recipesSelectors';
import { DEFAULT_POPULAR_PAGE_LIMIT } from '../../utils/constants';

export function PopularRecipes() {
  const dispatch = useDispatch();

  const recipes = useSelector(selectPopularRecipes);
  const isLoading = useSelector(selectPopularRecipesLoading);
  const error = useSelector(selectPopularRecipesError);

  useEffect(() => {
    if (!isLoading && recipes.length === 0) {
      dispatch(fetchPopularRecipes({ limit: DEFAULT_POPULAR_PAGE_LIMIT }));
    }
  }, [dispatch, isLoading, recipes]);

  useEffect(() => {
    if (error?.message) {
      toast.error(error.message);
    }
  }, [error]);

  if (isLoading) return <Loader />;

  if (!recipes || recipes.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.title}>Popular recipes</h2>
        <RecipeList items={recipes} columns={4} />
      </div>
    </section>
  );
}
