import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import { RecipeInfo } from '../components/RecipeInfo/RecipeInfo';
import { RECIPE_MOCK } from '../mocks/recipe';
import { PopularRecipes } from '../components/PopularRecipes/PopularRecipes';

export default function RecipePage() {
  const { id } = useParams();

  console.log('Recipe ID:', id);

  return (
    <div className="container main-container">
      <BreadCrumbs>{RECIPE_MOCK.title}</BreadCrumbs>

      <RecipeInfo data={RECIPE_MOCK} />

      <PopularRecipes items={RECIPE_MOCK.popularRecipes} />
    </div>
  );
}
