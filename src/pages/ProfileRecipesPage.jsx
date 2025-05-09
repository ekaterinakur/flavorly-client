import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyRecipes,
  selectRecipesError,
  selectRecipesLoading,
} from '../redux/selectors/recipesSelectors.js';
import { RecipeList } from '../components/RecipeList/RecipeList.jsx';
import { fetchMyRecipes } from '../api/recipes.js';
import { useEffect } from 'react';
import { ListPagination } from '../components/ListPagination/ListPagination.jsx';
import Loader from '../components/Loader/Loader.jsx';
import EmptyState from '../components/EmptyState/EmptyState.jsx';
import toast from 'react-hot-toast';

import { selectRecipesPagination } from '../redux/selectors/pafinationSelectors.js';

export default function ProfileRecipesPage() {
  const myRecipes = useSelector(selectMyRecipes);
  const { currentPage, totalPages, perPageLimit } = useSelector(
    selectRecipesPagination
  );
  const loading = useSelector(selectRecipesLoading);
  const error = useSelector(selectRecipesError);

  const dispatch = useDispatch();

  //
  useEffect(() => {
    dispatch(fetchMyRecipes({ page: currentPage, perPageLimit }));
  }, [dispatch, currentPage, perPageLimit]);

  // Set current page in LS and Redux
  const handlePageChange = (page) => {
    dispatch(fetchMyRecipes({ page, perPageLimit }));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Check for error, show toast with message
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  // Show loader
  if (loading) {
    return <>{loading && <Loader />}</>;
  }

  return (
    <div>
      {!loading && myRecipes.length === 0 ? (
        <EmptyState message="Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future." />
      ) : (
        <RecipeList items={myRecipes} columns={1} cardType="vertical" />
      )}
      {totalPages >= 1 && (
        <ListPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
