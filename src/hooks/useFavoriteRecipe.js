import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors/authSelectors';
import { openSignInModal } from '../redux/slices/modalSlice';
import toast from 'react-hot-toast';
import { addToFavorites, removeFromFavorites } from '../api/recipes';

export function useFavoriteRecipe({ id, isFavorite, onUpdate }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleFavorite = async () => {
    if (isLoggedIn) {
      try {
        if (isFavorite) {
          await dispatch(removeFromFavorites(id));
        } else {
          await dispatch(addToFavorites(id));
        }
        onUpdate && onUpdate();
      } catch {
        toast.error('Failed to add recipe to favorites');
      }
    } else {
      dispatch(openSignInModal());
    }
  };

  return toggleFavorite;
}
