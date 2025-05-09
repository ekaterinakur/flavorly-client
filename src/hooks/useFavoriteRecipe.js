import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/selectors/authSelectors';
import {
  useAddRecipeToFavoriteMutation,
  useRemoveRecipeFromFavoriteMutation,
} from '../redux/slices/apiSlice';
import { openSignInModal } from '../redux/slices/modalSlice';
import toast from 'react-hot-toast';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from '../redux/slices/authSlice';

export function useFavoriteRecipe({ id }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [addRecipeToFavorite, { isLoading: addRecipeToFavoriteLoading }] =
    useAddRecipeToFavoriteMutation();
  const [
    removeRecipeFromFavorite,
    { isLoading: removeRecipeFromFavoriteLoading },
  ] = useRemoveRecipeFromFavoriteMutation();

  const isAddedToFavorite = user?.favoriteRecipes?.includes(id);

  const handleClick = async () => {
    if (isLoggedIn) {
      try {
        if (isAddedToFavorite) {
          await removeRecipeFromFavorite(id).unwrap();
          dispatch(removeRecipeFromFavorites(id));
        } else {
          await addRecipeToFavorite(id).unwrap();
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
    isLoading: addRecipeToFavoriteLoading || removeRecipeFromFavoriteLoading,
    isAddedToFavorite,
  };
}
