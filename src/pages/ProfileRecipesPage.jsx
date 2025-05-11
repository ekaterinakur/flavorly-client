import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { dispatchResultHandler } from '../utils/dispatchResultHandler.js';
import { selectUser } from '../redux/selectors/authSelectors.js';
import {
  selectUserRecipes,
  selectUserRecipesError,
  selectUserRecipesLoading,
  selectUserRecipesPagination,
} from '../redux/selectors/recipesSelectors.js';
import { setUserRecipesPage } from '../redux/slices/userRecipesSlice.js';
import { DEFAULT_PAGE_LIMIT } from '../utils/constants.js';
import { RecipeList } from '../components/RecipeList/RecipeList.jsx';
import { fetchUserRecipes, deleteRecipe } from '../api/recipes.js';
import { ListPagination } from '../components/ListPagination/ListPagination.jsx';
import Loader from '../components/Loader/Loader.jsx';
import EmptyState from '../components/EmptyState/EmptyState.jsx';

export default function ProfileRecipesPage() {
  const dispatch = useDispatch();
  const { id: routeUserId } = useParams();

  const currentUser = useSelector(selectUser);
  const userId = routeUserId || currentUser.id;

  const recipes = useSelector(selectUserRecipes);
  const { page, totalPages } = useSelector(selectUserRecipesPagination);
  const loading = useSelector(selectUserRecipesLoading);
  const error = useSelector(selectUserRecipesError);

  useEffect(() => {
    if (!loading && userId) {
      dispatch(
        fetchUserRecipes({
          userId,
          page: page,
          limit: DEFAULT_PAGE_LIMIT,
        })
      );
    }
  }, [dispatch, page, userId]);

  useEffect(() => {
    if (error?.message) {
      toast.error(error.message);
    }
  }, [error]);

  useEffect(() => () => dispatch(setUserRecipesPage(1)));

  const handlePageChange = (page) => {
    dispatch(setUserRecipesPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    dispatchResultHandler(
      dispatch(deleteRecipe(id)),
      'Your recipe was deleted',
      'Failed to delete recipe'
    );
  };

  if (loading) return <Loader />;

  return (
    <div>
      {!recipes?.length ? (
        <EmptyState message="Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future." />
      ) : (
        <RecipeList
          items={recipes}
          columns={1}
          cardType="vertical"
          isOwner={userId === currentUser.id}
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
