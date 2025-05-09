import BackButton from '../BackButton/BackButton';
import { MainTitle } from '../MainTitle/MainTitle';
import { RecipeList } from '../RecipeList/RecipeList';
import RecipeFilter from '../RecipeFilters/RecipeFilters';
import { ListPagination } from '../ListPagination/ListPagination';

import { RECIPES_LIST } from '../../mocks/recipes-list';

import styles from './Recipes.module.scss';

export function Recipes() {
  const handlePageChange = (page) => {
    console.log(page);
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <BackButton className={styles.backButton} />
          <MainTitle
            title="Recipes"
            subtitle="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires."
          />
        </div>
        <div className={styles.content}>
          <RecipeFilter className={styles.filter} />
          <div className={styles.list}>
            <RecipeList items={RECIPES_LIST} className={styles.list} />
            <ListPagination
              currentPage="1"
              totalPages="3"
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
