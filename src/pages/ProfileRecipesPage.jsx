import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  selectMyRecipes,
  selectRecipesError,
  selectRecipesLoading,
} from '../redux/selectors/recipesSelectors.js';
import { RecipeList } from '../components/RecipeList/RecipeList.jsx';
import { fetchUserRecipes } from '../api/recipes.js';
import { ListPagination } from '../components/ListPagination/ListPagination.jsx';
import Loader from '../components/Loader/Loader.jsx';
import EmptyState from '../components/EmptyState/EmptyState.jsx';

import { selectRecipesPagination } from '../redux/selectors/paginationSelectors.js';
import { selectUser } from '../redux/selectors/authSelectors.js';

export default function ProfileRecipesPage() {
  const { id: userId } = useParams();
  const currentUser = useSelector(selectUser);

  const userRecipes = useSelector(selectMyRecipes);
  const { currentPage, totalPages, perPageLimit } = useSelector(
    selectRecipesPagination
  );
  const loading = useSelector(selectRecipesLoading);
  const error = useSelector(selectRecipesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchUserRecipes({
        userId: userId ?? currentUser.id,
        page: currentPage,
        perPageLimit,
      })
    );
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(
      fetchUserRecipes({ userId: userId ?? currentUser.id, page, perPageLimit })
    );
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleUpdateList = useCallback(() => {
    dispatch(
      fetchUserRecipes({
        userId: userId ?? currentUser.id,
        page: currentPage,
        perPageLimit,
      })
    );
  }, [userId, currentUser, currentPage, perPageLimit]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteRecipe(id));
      dispatch(
        fetchUserRecipes({
          userId: userId ?? currentUser.id,
          page: currentPage,
          perPageLimit,
        })
      );

      toast.success('Your recipe was deleted');
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
      {userRecipes.length === 0 ? (
        <EmptyState message="Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future." />
      ) : (
        <RecipeList
          items={userRecipes}
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
