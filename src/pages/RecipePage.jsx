import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import { RecipeInfo } from '../components/RecipeInfo/RecipeInfo';
import { PopularRecipes } from '../components/PopularRecipes/PopularRecipes';
import Loader from '../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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

  if (isLoading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <BreadCrumbs breadcrumbs={recipe.title} />

      {recipe ? <RecipeInfo recipe={recipe} /> : null}

      <PopularRecipes />
    </>
  );
}
