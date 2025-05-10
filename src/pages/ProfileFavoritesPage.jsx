import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  selectFavoriteRecipes,
  selectRecipesError,
  selectRecipesLoading,
} from '../redux/selectors/recipesSelectors.js';
import { RecipeList } from '../components/RecipeList/RecipeList.jsx';
import { fetchFavoriteRecipes } from '../api/recipes.js';
import { ListPagination } from '../components/ListPagination/ListPagination.jsx';
import Loader from '../components/Loader/Loader.jsx';
import EmptyState from '../components/EmptyState/EmptyState.jsx';

import { selectRecipesPagination } from '../redux/selectors/paginationSelectors.js';

export default function ProfileFavoritesPage() {
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const { currentPage, totalPages, perPageLimit } = useSelector(
    selectRecipesPagination
  );
  const loading = useSelector(selectRecipesLoading);
  const error = useSelector(selectRecipesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteRecipes({ page: currentPage, perPageLimit }));
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(fetchFavoriteRecipes({ page, perPageLimit }));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleUpdateList = useCallback(() => {
    dispatch(fetchFavoriteRecipes({ page: currentPage, perPageLimit }));
  }, [currentPage, perPageLimit]);

  const handleDelete = async (id) => {
    try {
      await dispatch(removeFromFavorites(id));
      dispatch(fetchFavoriteRecipes({ page: currentPage, perPageLimit }));

      toast.success('Recipe removed from favorites');
    } catch (err) {
      toast.error(err.message || 'Failed to delete recipe');
    }
  };

  // Check for error, show toast with message
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  // Show loader
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {favoriteRecipes.length === 0 ? (
        <EmptyState message="Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future." />
      ) : (
        <RecipeList
          items={favoriteRecipes}
          columns={1}
          cardType="vertical"
          onUpdate={handleUpdateList}
          onDelete={handleDelete}
        />
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
