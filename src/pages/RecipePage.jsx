import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import { RecipeInfo } from '../components/RecipeInfo/RecipeInfo';
import { PopularRecipes } from '../components/PopularRecipes/PopularRecipes';
import Loader from '../components/Loader/Loader';
import { fetchRecipeById } from '../api/recipes';
import {
  selectCurrentRecipe,
  selectCurrentRecipeError,
  selectCurrentRecipeLoading,
} from '../redux/selectors/recipesSelectors';

export default function RecipePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const recipe = useSelector(selectCurrentRecipe);
  const isLoading = useSelector(selectCurrentRecipeLoading);
  const error = useSelector(selectCurrentRecipeError);

  useEffect(() => {
    if (!isLoading && recipe?.id !== id) {
      dispatch(fetchRecipeById(id));
    }
  }, [dispatch, id, recipe]);

  useEffect(() => {
    if (error?.message) {
      toast.error(error.message);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {recipe ? (
        <>
          <BreadCrumbs breadcrumbs={recipe?.title} />
          <RecipeInfo recipe={recipe} />
        </>
      ) : null}

      <PopularRecipes />
    </>
  );
}
