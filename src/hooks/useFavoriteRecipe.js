import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors/authSelectors';
import { openSignInModal } from '../redux/slices/modalSlice';
import toast from 'react-hot-toast';
import { addToFavorites, removeFromFavorites } from '../api/recipes';

export function useFavoriteRecipe({ id, isFavorite }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleFavorite = async () => {
    if (isLoggedIn) {
      try {
        if (isFavorite) {
          dispatch(removeFromFavorites(id));
        } else {
          dispatch(addToFavorites(id));
        }
      } catch {
        toast.error('Failed to add recipe to favorites');
      }
    } else {
      dispatch(openSignInModal());
    }
  };

  return toggleFavorite;
}
