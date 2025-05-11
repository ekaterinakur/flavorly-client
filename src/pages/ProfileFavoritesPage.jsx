import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { fetchFavoriteRecipes, removeFromFavorites } from '../api/recipes.js';
import {
  selectFavoriteRecipes,
  selectFavoriteRecipesError,
  selectFavoriteRecipesLoading,
  selectFavoriteRecipesPagination,
} from '../redux/selectors/recipesSelectors.js';
import { setFavoriteRecipesPage } from '../redux/slices/favoriteRecipesSlice.js';
import { dispatchResultHandler } from '../utils/dispatchResultHandler.js';
import { DEFAULT_PAGE_LIMIT } from '../utils/constants.js';
import { RecipeList } from '../components/RecipeList/RecipeList.jsx';
import { ListPagination } from '../components/ListPagination/ListPagination.jsx';
import Loader from '../components/Loader/Loader.jsx';
import EmptyState from '../components/EmptyState/EmptyState.jsx';

export default function ProfileFavoritesPage() {
  const dispatch = useDispatch();

  const recipes = useSelector(selectFavoriteRecipes);
  const { page, totalPages } = useSelector(
    selectFavoriteRecipesPagination
  );
  const loading = useSelector(selectFavoriteRecipesLoading);
  const error = useSelector(selectFavoriteRecipesError);

  useEffect(() => {
    if (!loading) {
      dispatch(
        fetchFavoriteRecipes({
          page: page,
          limit: DEFAULT_PAGE_LIMIT,
        })
      );
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (error?.message) {
      toast.error(error.message);
    }
  }, [error]);

  useEffect(() => () => dispatch(setFavoriteRecipesPage(1)));

  const handlePageChange = (page) => {
    dispatch(setFavoriteRecipesPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    dispatchResultHandler(
      dispatch(removeFromFavorites(id)),
      'Recipe removed from favorites',
      'Failed to delete recipe'
    );
  };

  if (loading) return <Loader />;

  return (
    <div>
      {!recipes?.length ? (
        <EmptyState message="Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future." />
      ) : (
        <RecipeList
          items={recipes}
          columns={1}
          cardType="vertical"
          isOwner={true}
          onDelete={handleDelete}
        />
      )}
      {totalPages > 1 && (
        <ListPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
