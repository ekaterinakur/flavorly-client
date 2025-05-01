import { RecipeList } from '../components/RecipeList/RecipeList';
import { RECIPES_LIST } from '../mocks/recipes-list';

export default function HomePage() {
  return (
    <>
      <div className="container main-container">
        <RecipeList items={RECIPES_LIST} />
      </div>
    </>
  );
}
