import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import { RecipeInfo } from '../components/RecipeInfo/RecipeInfo';
import { PopularRecipes } from '../components/PopularRecipes/PopularRecipes';
import Loader from '../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { fetchRecipeById } from '../api/recipes';
import { selectCurrentRecipe } from '../redux/selectors/recipesSelectors';

export default function RecipePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectCurrentRecipe);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchRecipeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (recipe?.id !== id && !isLoading) {
      setIsLoading(true);
    }
  }, [id, isLoading, recipe?.id]);

  useEffect(() => {
    if (recipe && recipe.id === id && isLoading) {
      setIsLoading(false);
    }
  }, [id, isLoading, recipe]);

  const handleUpdateRecipe = useCallback(() => {
    dispatch(fetchRecipeById(id));
  }, [id]);

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
          <RecipeInfo recipe={recipe} onUpdate={handleUpdateRecipe} />
        </>
      ) : null}

      <PopularRecipes />
    </>
  );
}
