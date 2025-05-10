import classNames from 'classnames';
import { RecipeList } from '../RecipeList/RecipeList';
import styles from './PopularRecipes.module.scss';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchPopularRecipes } from '../../api/recipes';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopularRecipes } from '../../redux/selectors/recipesSelectors';

export function PopularRecipes() {
  const dispatch = useDispatch();
  const recipes = useSelector(selectPopularRecipes);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPopularRecipes({ limit: 4 }));
  }, [dispatch]);

  useEffect(() => {
    if (recipes.length && isLoading) {
      setIsLoading(false);
    }
  }, [isLoading, recipes.length]);

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
