import { useDispatch } from 'react-redux';
import { removeFromFavorites, deleteRecipe } from '../api/recipes';
import { fetchFavoriteRecipes, fetchMyRecipes } from '../api/recipes';
import toast from 'react-hot-toast';


export function useRecipeDeletion({ type, page, perPageLimit }) {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      if (type === 'favorites') {
        await dispatch(removeFromFavorites(id));
        dispatch(fetchFavoriteRecipes({ page, perPageLimit }));
        toast.success('Recipe removed from favorites');
      } else if (type === 'my') {
        await dispatch(deleteRecipe(id));
        dispatch(fetchMyRecipes({ page, perPageLimit }));
        toast.success('Your recipe was deleted');
      } else {
        throw new Error('Unknown delete type');
      }
    } catch (err) {
      toast.error(err.message || 'Failed to delete recipe');
    }
  };

  return handleDelete;
}
