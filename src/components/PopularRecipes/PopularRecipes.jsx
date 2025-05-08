import classNames from 'classnames';
import { RecipeList } from '../RecipeList/RecipeList';
import styles from './PopularRecipes.module.scss';
import { useGetPopularRecipesQuery } from '../../redux/slices/apiSlice';
import Loader from '../Loader/Loader';

export function PopularRecipes() {
  const { data, isLoading } = useGetPopularRecipesQuery();

  if (isLoading) return <Loader />;

  if (!data || data.length === 0) return null;

  return (
    <section className={classNames('section', styles.wrapper)}>
      <h2 className={styles.title}>Popular recipes</h2>
      <RecipeList items={data} columns={4} />
    </section>
  );
}
