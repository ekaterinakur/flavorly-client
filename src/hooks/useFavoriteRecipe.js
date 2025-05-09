import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/selectors/authSelectors';
import { openSignInModal } from '../redux/slices/modalSlice';
import toast from 'react-hot-toast';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from '../redux/slices/authSlice';
import { addToFavorites, removeFromFavorites } from '../api/recipes';

export function useFavoriteRecipe({ id }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isAddedToFavorite = user?.favoriteRecipes?.includes(id);

  const handleClick = () => {
    if (isLoggedIn) {
      try {
        if (isAddedToFavorite) {
          dispatch(removeFromFavorites(id));
          dispatch(removeRecipeFromFavorites(id));
        } else {
          dispatch(addToFavorites(id));
          dispatch(addRecipeToFavorites(id));
        }
      } catch {
        toast.error('Failed to add recipe to favorites');
      }
    } else {
      dispatch(openSignInModal());
    }
  };

  return {
    handleClick,
    isAddedToFavorite,
  };
}
